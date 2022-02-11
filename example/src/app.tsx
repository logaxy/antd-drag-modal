import React from 'react'
import { Button } from 'antd'
import AntdDraggableModal from '../../src/index'
// import AntdDraggableModal from 'antd-draggable-modal' // for npm link
import 'antd/dist/antd.css';

class App extends React.Component<{}, { visible: boolean }> {
    state = {
        visible: false,
    }

    render() {
        const { visible } = this.state
        return (
            <div style={{ width: '100vw', height: '100vh', textAlign: 'center' }} id="app">
                <Button onClick={() => { this.setState({ visible: true }) }}>visible</Button>
                <AntdDraggableModal
                    title="DraggableModal"
                    visible={visible}
                    centered
                    width={500}
                    maskClosable={false}
                    onCancel={() => { this.setState({ visible: false }) }}
                    onOk={() => { this.setState({ visible: false }) }}
                >
                    <div>ModalContent</div>
                </AntdDraggableModal>
            </div>
        )
    }
}

export default App
