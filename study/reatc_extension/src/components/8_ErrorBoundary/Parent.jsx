import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    state = {
        hasError:''
    }
    //当parent的子组件出现错误的时候，会触发getDerivedStateFromError调用，并携带错误信息
    static getDerivedStateFromError(error) {
        console.log(error);
        //会在render之前触发，返回心动state
        return {hasError:error}
    }
    componentDidCatch(error,info) {
        //error - 抛出的错误。
        //nfo- componentStack包含键的对象，其中包含有关哪个组件引发错误的信息。
        //如果发生错误，可以componentDidCatch()通过调用呈现回退UI setState，但在将来的版本中将不推荐使用。使用static getDerivedStateFromError()处理回退，而不是渲染。
        console.log('统计错误次数，反馈给服务器，用于通知程序员进行bug修改')
    }
    render() {
        return (
            <div>
                <h3>我是Parent组件</h3>
                {this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child/>}
            </div>
        )
    }
}
