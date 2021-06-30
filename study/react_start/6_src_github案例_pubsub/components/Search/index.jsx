import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class Search extends Component {
    search = ()=> {
        
        // PubSub.publish('demo', {name:'tom',age:29})
        //结构赋值连续写法，连续解构赋值还可以重命名
        const {keywordElement:{value}} = this;
        // const {keywordElement:{value: keyword}} = this;//重命名
        
        //发送请求前更新App状态
        PubSub.publish('demo', {isFirst: false,isLoading: true})

        //直接请求
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                //请求成功后更新App状态
                PubSub.publish('demo', {isLoading: false,users:response.data.items})
            },
            error => {
                //请求失败后更新App状态
                PubSub.publish('demo', {isLoading: false,err:error.message})
            }
        )

        
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c =>this.keywordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
