import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
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
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&message=${msgObj.message}`}>{msgObj.message}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,message:msgObj.message}}}>{msgObj.message}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* 声明接收params参数 */}
                {/* <Route path='/home/message/detail/:id/:message' component={Detail}/> */}

                {/* search参数无需声明接收 */}
                {/* <Route path='/home/message/detail' component={Detail}></Route> */}

                {/* state参数无需声明接收 */}
                <Route path='/home/message/detail' component={Detail}></Route>

            </div>
        )
    }
}
