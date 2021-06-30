import React, { Component } from 'react'
import './index.css'
export default class Parent extends Component {
    render() {
        return (
            <div className="a">
                我是组件Parent
                <A render={(name) => <B name={name}/>}/>
            </div>
        )
    }
}
class A extends Component {
    state = {name: 'tom'}
    render() {
        const {name} = this.state
        return (
            <div className="b">
                我是组件A
                {this.props.render(name)}{/* 插槽 */}
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className="c">
                我是组件B
                <h4>
                    {this.props.name}
                </h4>
            </div>
        )
    }
}
