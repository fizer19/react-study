import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'
export default class Search extends Component {
    search = async ()=> {
        
        // PubSub.publish('demo', {name:'tom',age:29})
        //结构赋值连续写法，连续解构赋值还可以重命名
        const {keywordElement:{value}} = this;
        // const {keywordElement:{value: keyword}} = this;//重命名
        
        //发送请求前更新App状态
        PubSub.publish('demo', {isFirst: false,isLoading: true})

        //#region axios发送请求
        //直接请求
        /* axios.get(`https://api.github.com/search/users2?q=${value}`).then(
            response => {
                //请求成功后更新App状态
                PubSub.publish('demo', {isLoading: false,users:response.data.items})
            },
            error => {
                //请求失败后更新App状态
                PubSub.publish('demo', {isLoading: false,err:error.message})
            }
        ) */

        //通过代理服务器请求
        /* axios.get(`http://localhost:3000/search/users2?q=${value}`).then(
            response => {
                //请求成功后更新App状态
                PubSub.publish('demo', {isLoading: false,users:response.data.items})
            },
            error => {
                //请求失败后更新App状态
                PubSub.publish('demo', {isLoading: false,err:error.message})
            }
        ) */
        //给本地发请求可以省略 http://localhost:3000
        // axios.get(`/search/users?q=${value}`).then(
        //     response => console.log(response),
        //     error => console.log(error)
        // )

        //#endregion

        /* 未优化，错误处理未优化，返回结果未优化
        // 使用fetch发送请求 fetch不会直接返回数据，而是通过返回结果原型上的json()方法得到一个Promise对象，结果就包含在这个promise中
        fetch(`/search/users2?q=${value}`).then(
            response => {
                console.log('联系服务器成功',response);
                return response.json()
            },
            error => {
                console.log('联系服务器失败',error);
                // return new Promise(() => {})//中断Promise
            }
        ).then(
            response =>{console.log('获取数据成功',response)},
            error => {
                console.log('获取数据失败',error);
            }
        ) */

            //错误处理优化，使用.catch错误统一捕获
            /* fetch(`/search/users2?q=${value}`).then(
                response => {
                    console.log('联系服务器成功',response);
                    return response.json()
                },
                
            ).then(
                response =>{console.log('获取数据成功',response)},
            ).catch(
                error => {console.log('错误',error);}
            ) */


            //对返回结果进行优化，一直.then的方法不够简洁，使用async await方法简化，使用tyr catch捕获异常
            try {
                const response = await fetch(`/search/users2?q=${value}`)
                const data = await response.json()
                console.log(data);
                PubSub.publish('demo', {isLoading: false,users:data.items})
            } catch (error) {
                console.log('出错了',error);
                PubSub.publish('demo', {isLoading: false,err:error.message})
            }
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
