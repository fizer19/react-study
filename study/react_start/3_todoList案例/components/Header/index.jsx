import React, { Component } from 'react'
import PropTypes from 'prop-types'//需要自己安装
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
    //对接收的props进行类型和必要性限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    //键盘事件回调
    handleKeyUp = (event) =>{
        const {keyCode,target}  = event
        if(keyCode !== 13) return
        console.log(target.value);
        //去掉空格后不能为空
        if(target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        const todoObj = {id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        target.value = ''

    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
