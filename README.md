antd-drag-modal
===============================
A draggable modal based on antd modal.

## Installation

```bash
$ npm i --save antd-drag-modal
```


## Usage

```javascript
import React from 'react'
import { Button } from 'antd'
import AntdDragModal from 'antd-drag-modal'

class MyComponent extends React.Component<{}, { visible: boolean }> {
    state = {
        visible: false,
    }

    render() {
        const { visible } = this.state
        return (
            <div style={{ width: '100vw', height: '100vh', textAlign: 'center' }}>
                <Button onClick={() => { this.setState({ visible: true }) }}>showModal</Button>
                <AntdDragModal
                    visible={visible}
                    centered
                    width={500}
                    maskClosable={true}
                    onCancel={() => { this.setState({ visible: false }) }}
                    onOk={() => { this.setState({ visible: false }) }}
                >
                    <div>ModalContent</div>
                </AntdDragModal>
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
