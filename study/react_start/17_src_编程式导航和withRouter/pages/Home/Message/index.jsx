import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
    pushShow = (id, message) => {
        this.props.history.push(`/home/message/detail/?id=${id}&message=${message}`)
        // this.props.history.push('/home/message/detail',{id,message})
    }
    replaceShow = (id, message) => {
        this.props.history.replace(`/home/message/detail/?id=${id}&message=${message}`)
        // this.props.history.replace('/home/message/detail',{id,message})
    }
    goBack = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    go = () => {
        this.props.history.go(2)
    }
    render() {
        const msgList = [
            { id: '1', message: '消息1' },
            { id: '2', message: '消息2' },
            { id: '3', message: '消息3' },
        ]
        return (
            <div>
                <ul>
                    {
                        msgList.map(msgObj => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.message}`}>{msgObj.message}</Link> */}

                                    {/* 向路由组件传递search参数 */}
                                    <Link to={`/home/message/detail/?id=${msgObj.id}&message=${msgObj.message}`}>{msgObj.message}</Link>

                                    {/* 向路由组件传递state参数 */}
                                    {/* <Link replace to={{pathname:'/home/message/detail',state:{id:msgObj.id,message:msgObj.message}}}>{msgObj.message}</Link> */}
                                    &nbsp;<button onClick={() => this.pushShow(msgObj.id,msgObj.message)}>push查看</button>
                                    &nbsp;<button onClick={() => this.replaceShow(msgObj.id,msgObj.message)}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 声明接收params参数 */}
                {/* <Route path='/home/message/detail/:id/:message' component={Detail}/> */}

                {/* search参数无需声明接收 */}
                <Route path='/home/message/detail' component={Detail}></Route>

                {/* state参数无需声明接收 */}
                {/* <Route path='/home/message/detail' component={Detail}></Route> */}
                    <button onClick={this.goBack}>后退</button>
                    <button onClick={this.forward}>前进</button>
                    <button onClick={this.go}>go</button>
            </div>
        )
    }
}
