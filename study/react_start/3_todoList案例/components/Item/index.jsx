import React, { Component } from 'react'

import './index.css'
export default class Item extends Component {
    state = {mouse: false}
    //鼠标进入和离开回调
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }
    //单选框回调
    handleChecked = (id) => {
        return (event) => {
            this.props.updataTodo(id,event.target.checked)
        }
    }
    handleDelete = (id) => {
        if(window.confirm('确定删除吗')) {
            this.props.deleteTodo(id)
        }
        
    }
    render() {
        const {id,name,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse?'#ddd':'#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox"  checked={done} onChange={this.handleChecked(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={() =>{this.handleDelete(id)}} className="btn btn-danger" style={{ display: mouse?'block':'none' }}>删除</button>
            </li>
        )
    }
}
