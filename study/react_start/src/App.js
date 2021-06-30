import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import {WechatOutlined} from '@ant-design/icons'

export default class App extends Component {
    onChange = () => {
        
    }
    render() {
        return (
            <div>
                <Button type="primary">Primary Button</Button>
                <WechatOutlined />
                <DatePicker onChange={this.onChange} />
            </div>
        )
    }
}
