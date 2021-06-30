import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

export default class App extends Component {
    state = {
        todos: [
            {id:'001',name:'吃饭',done:true},
            {id:'002',name:'睡觉',done:true},
            {id:'003',name:'打豆豆',done:false},
        ]
    }
    addTodo = (todoObj) => {
        console.log(todoObj);
        const {todos} = this.state;
        const newTodos = [todoObj,...todos]
        this.setState({todos: newTodos})
    }
    //单选框回调
    updataTodo = (id,done) => {
        const {todos} = this.state;
        const newTodos = todos.map(todoObj => {
            if(id === todoObj.id) return {...todoObj,done}
            else return todoObj
        })
        this.setState({todos:newTodos})
    }
    deleteTodo = (id) => {
        const {todos} = this.state;
        const newTodos = todos.filter((todo) => {
            return id !== todo.id
        })
        this.setState({todos: newTodos})
    }
    //全选和取消全选
    checkAll = (done) => {
        const {todos} = this.state;
        const newTodos = todos.map(todo => {
            return {...todo,done}
        })
        this.setState({todos:newTodos})
    }
    clearAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter(todo => {
            return !todo.done
        })
        this.setState({todos: newTodos})
    }
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={this.state.todos} updataTodo={this.updataTodo} deleteTodo={this.deleteTodo}/>
                    
                    <Footer todos={this.state.todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}
