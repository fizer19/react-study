import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
    render() {
        return (
            // 外部调用时标签内的属性也是通过props传递，使用children作为键值，而标签内容可以通过children属性指定，所以不用单独赋值
            <NavLink className='list-group-item' {...this.props}></NavLink>
        )
    }
}
