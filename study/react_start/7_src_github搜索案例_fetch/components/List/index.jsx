import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'
export default class List extends Component {
    state = {
        users: [],
        isFirst: true,//第一次加载
        isLoading: false,//是否加载中
        err: '',//存储请求错误信息
    }
    componentDidMount() {
        
        this.token = PubSub.subscribe('demo',(_,data) => {

            this.setState(data)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，点击搜索</h2> : isLoading ? <h2>loading....</h2> : err ? <h2>{err}</h2>:
                    users.map(userObj => {
                        return (
                            <div key={userObj.id} className="card">
                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                    <img alt="avatar" src={userObj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }


            </div>
        )
    }
}
