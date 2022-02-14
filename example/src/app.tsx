import React from 'react'
import { Button } from 'antd'
import AntdDragModal from '../../src/index'
// import AntdDragModal from 'antd-drag-modal' // for npm link
import 'antd/dist/antd.css';

class App extends React.Component<{}, { visible: boolean }> {
    state = {
        visible: false,
    }

    render() {
        const { visible } = this.state
        return (
            <div style={{ width: '100vw', height: '100vh', textAlign: 'center' }} id="app">
                <Button onClick={() => { this.setState({ visible: true }) }}>showModal</Button>
                <AntdDragModal
                    title="title"
                    visible={visible}
                    centered
                    width={500}
                    maskClosable={true}
                    contentDraggable={false}
                    onCancel={() => { this.setState({ visible: false }) }}
                    onOk={() => { this.setState({ visible: false }) }}
                >
                    <div>ModalContent</div>
                </AntdDragModal>
            </div>
        )
    }
}

export default App
