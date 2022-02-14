import React, { Component, MouseEvent } from 'react'
import { Modal } from 'antd'
import { ModalProps } from 'antd/lib/modal'
import 'antd/es/modal/style/index.css'

interface IProps extends ModalProps {
  contentDraggable?: boolean
}

export default class AntdDragModal extends Component<IProps> {
  private simpleClassName: string

  private container: any

  private content: any

  private header: any

  private footer: any

  private mouseDownX: number = 0

  private mouseDownY: number = 0

  constructor(props: ModalProps) {
    super(props)
    this.simpleClassName = Math.random().toString(36).substring(2)
  }

  onMousemove = (event: any) => {
    const offsetX = event.clientX - this.mouseDownX
    const offsetY = event.clientY - this.mouseDownY
    const x = this.content.offsetLeft
    const y = this.content.offsetTop
    const rectObject = this.content.getBoundingClientRect()
    const { clientWidth, clientHeight } = this.container

    let modalLeft = offsetX + x
    modalLeft = Math.max(modalLeft, (rectObject.width - clientWidth) / 2)
    modalLeft = Math.min(modalLeft, (clientWidth - rectObject.width) / 2)

    let modalTop = offsetY + y
    modalTop = Math.max(modalTop, (rectObject.height - clientHeight) / 2)
    modalTop = Math.min(modalTop, (clientHeight - rectObject.height) / 2)

    this.content.style.left = `${modalLeft}px`
    this.content.style.top = `${modalTop}px`

    this.mouseDownX = event.clientX
    this.mouseDownY = event.clientY
  }

  initialEvent = (visible: boolean = false) => {
    if (visible) {
      setTimeout(() => {
        const { contentDraggable = true } = this.props
        window.removeEventListener('mouseup', this.onMouseup, false)

        const container = document.getElementsByClassName(this.simpleClassName)[0]
        this.container = container
        this.container.style.overflow = 'hidden'

        const content = this.container.getElementsByClassName('ant-modal-content')[0]
        if (content) {
          this.content = content
          this.content.style.position = 'relative'

          if (contentDraggable) {
            this.content.style.cursor = 'all-scroll'
            this.content.onmousedown = this.onMouseDown
          }

        }

        const header = this.container.getElementsByClassName('ant-modal-header')[0]
        if (header) {
          this.header = header
          this.header.style.cursor = 'all-scroll'
          this.header.onmousedown = this.onMouseDown
        }

        const footer = this.container.getElementsByClassName('ant-modal-footer')[0]
        if (footer) {
          this.footer = footer
          this.footer.style.cursor = 'all-scroll'
          this.footer.onmousedown = this.onMouseDown
        }

        window.addEventListener('mouseup', this.onMouseup, false)
      }, 0)
    }
  }

  onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    this.mouseDownX = e.clientX
    this.mouseDownY = e.clientY
    document.body.onselectstart = () => false
    window.addEventListener('mousemove', this.onMousemove, false)
  }

  removeMove = () => {
    window.removeEventListener('mousemove', this.onMousemove, false)
  }

  onMouseup = () => {
    document.body.onselectstart = () => true
    this.removeMove()
  }

  componentDidUpdate() {
    const { visible } = this.props
    this.initialEvent(visible)
  }

  componentWillUnmount() {
    this.removeMove()
    window.removeEventListener('mouseup', this.onMouseup, false)
  }

  render() {
    const { wrapClassName, children, ...rest } = this.props
    let className = `${this.simpleClassName}`
    if (wrapClassName) {
      className = `${wrapClassName} ${this.simpleClassName}`
    }

    return (
      <Modal
        maskClosable={false}
        centered
        okText="确定"
        cancelText="取消"
        {...rest}
        wrapClassName={className}
        bodyStyle={{
          maxHeight: 'calc(100vh - 100px)',
          overflow: 'auto',
        }}
      >
        {children}
      </Modal>
    )
  }
}
