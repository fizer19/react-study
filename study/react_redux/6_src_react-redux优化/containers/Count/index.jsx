
//引入action
import { createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

import React, { Component } from 'react'
//引入actionCreator,专门用于创建action对象
class Count extends Component {
    
    increment = () => {
        const { value } = this.selectNumber;
        this.props.jia(value*1)
    }
    decrement = () => {
        const { value } = this.selectNumber;
        this.props.jian(value*1)
    }
    //奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        
        if (this.props.count % 2 !== 0) {
            this.props.jia(value*1)
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber;
        this.props.jiaAsync(value*1,500)
    }
    render() {
        // console.log('props',this.props);
        return (
            <div>
                <h2>当前求和为：{this.props.count}</h2>&nbsp;
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>加</button>
                <button onClick={this.decrement}>减</button>
                <button onClick={this.incrementIfOdd}>和为奇数加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}



//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    //mapStateToProps简写
    state => ({count: state}), 
    //mapDispatchToProps的一般写法
    // dispatch => ({
    //     jia: number => dispatch(createIncrementAction(number)),
    //     jian: number => dispatch(createDecrementAction(number)),
    //     jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
    // }) 

    //api层面简写，value返回的是一个action，内部自动dispatch分发
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction,
    }
)(Count)