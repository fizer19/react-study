import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {
    componentDidMount() {//或者在入口文件监听，刷新整个App，有diffing算法，不会更新所有节点
        //监测store中状态的变化，巧妙的调用render更新页面
        store.subscribe(()=> {
            this.setState({})
        })
    }
    increment = () => {
        const { value } = this.selectNumber;
        store.dispatch({type:'increment',data:value*1})
    }
    decrement = () => {
        const { value } = this.selectNumber;
        store.dispatch({type:'decrement',data:value*1})

    }
    //奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        const count = store.getState();
        if (count % 2 !== 0) {
            store.dispatch({type:'increment',data:value*1})
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber;
        setTimeout(()=>{
            store.dispatch({type:'increment',data:value*1})
        },1000)
    }
    render() {
        return (
            <div>
                <h2>当前求和为：{store.getState()}</h2>&nbsp;
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
