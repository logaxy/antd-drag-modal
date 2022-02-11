antd-draggable-modal
===============================
A draggable modal based on antd modal.

## Installation

```bash
$ npm i --save antd-draggable-modal
```


## Usage

```javascript
import React from 'react'
import { Button } from 'antd'
import AntdDraggableModal from 'antd-draggable-modal'

class MyComponent extends React.Component<{}, { visible: boolean }> {
    state = {
        visible: false,
    }

    render() {
        const { visible } = this.state
        return (
            <div style={{ width: '100vw', height: '100vh', textAlign: 'center' }}>
                <Button onClick={() => { this.setState({ visible: true }) }}>showModal</Button>
                <AntdDraggableModal
                    visible={visible}
                    centered
                    width={500}
                    maskClosable={true}
                    onCancel={() => { this.setState({ visible: false }) }}
                    onOk={() => { this.setState({ visible: false }) }}
                >
                    <div>ModalContent</div>
                </AntdDraggableModal>
            </div>
        )
    }
}

export default MyComponent


```

## Notes

1. The draggable area is set to the header and footer of the modal. Please ensure that your modal has at least one of the two elements header and footer.
2. The modal has tow default styles set via bodystyle:`maxHeight: 'calc(100vh - 100px)`、`overflow: 'auto'`.
3. To identify the modal, the className of the mod is set via wrapClassName, with the following rule: `${wrapClassName} ${Math.random().toString(36).substring(2)}`
4. See Antd:https://ant.design/components/modal-cn/ for details of other props
