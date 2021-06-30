import React, { Component } from 'react'
import PropTypes from 'prop-types'//需要自己安装

import Item from '../Item'

import './index.css'
export default class List extends Component {

    //对接收的props进行类型和必要性限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updataTodo: PropTypes.func.isRequired
    }
    render() {
        const {todos, updataTodo, deleteTodo} = this.props
        return (
            <ul className="todo-main">
               {
                   todos.map( todo => {
                       return <Item key={todo.id} {...todo} updataTodo={updataTodo} deleteTodo={deleteTodo}/>
                   })
               } 
                
            </ul>
        )
    }
}
