import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    search = ()=> {
        //结构赋值连续写法，连续解构赋值还可以重命名
        const {keywordElement:{value}} = this;
        // const {keywordElement:{value: keyword}} = this;//重命名
        
        //发送请求前更新App状态
        this.props.updateAppState({isFirst: false,isLoading: true})

        //直接请求
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                //请求成功后更新App状态
                this.props.updateAppState({isLoading: false,users:response.data.items})
            },
            error => {
                //请求失败后更新App状态
                this.props.updateAppState({isLoading: false,err:error.message})
            }
        )

        //通过代理服务器请求
        /* axios.get(`http://localhost:3000/search/users?q=${value}`).then(
            response => {
                //请求成功后更新App状态
                this.props.updateAppState({isLoading: false,users:response.data.items})
            },
            error => {
                //请求失败后更新App状态
                this.props.updateAppState({isLoading: false,err:error})
            }
        ) */
        //给本地发请求可以省略 http://localhost:3000
        // axios.get(`/search/users?q=${value}`).then(
        //     response => console.log(response),
        //     error => console.log(error)
        // )
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
