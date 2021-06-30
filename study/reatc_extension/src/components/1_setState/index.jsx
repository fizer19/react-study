import React, { Component } from 'react'

export default class Demo extends Component {
    state = {count: 0}
    add = () => {
        //对象式
       /*  const {count} = this.state;
        this.setState({count:count+1},()=> {
            console.log(this.state.count);
        }) */

        //函数式
        this.setState((state,props) => {
            console.log(state,props);
            return {count:state.count + 1}
        })
        // this.setState(state => ({count:state.count + 1}))
    }
    render() {
        return (
            <div>
                <h3>当前求数字为:{this.state.count}</h3>
                <button onClick={this.add}>加1</button>
            </div>
        )
    }
}
