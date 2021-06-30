import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {
    state = {carName:'奔驰'}
    changeCar = () => {
        this.setState({carName:'迈巴赫'})
        // this.setState({})

        /* 
        //不要直接修改state数据，PureComponent做了浅比较，obj和state地址相同，认为没有变化
        //而this.setState({carName:'迈巴赫'})是新数据
        const obj = this.state
        obj.carName = '迈巴赫'
        this.setState(obj) */
    }
    // shouldComponentUpdate(nextProps,nextState) {
    //     return this.state.carName !== nextState.carName //如果前后数据一样，说明没什么更新，关闭阀门
    // }
    render() {
        console.log('parent--render');
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <h4>我的车是：{this.state.carName}</h4>
                <button onClick={this.changeCar}>换车</button>
                <Child carName="奥托"/>
            </div>
        )
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps,nextState) {
    //     return this.props.carName !== nextState.carName
    // }
    render() {
        //父组件传递的参数是个固定值，所以阀门关闭，不会触发子组件render
        console.log('child-render');
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <h4>我接到的车是{this.props.carName}</h4>
            </div>
        )
    }
}

