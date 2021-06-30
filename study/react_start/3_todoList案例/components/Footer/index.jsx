import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAll(event.target.checked)
    }
    handleClearAll = () => {
        this.props.clearAllDone()
    }
    render() {
        const {todos} = this.props
        const hasDone = todos.reduce((pre,current) => pre + (current.done ? 1 : 0),0)
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={(hasDone === total) && total > 0 ? true : false} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{hasDone}</span> / 全部{total}
                    </span>
                <button onClick={this.handleClearAll} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
