import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import './App.css'
export default class App extends Component {



    render() {

        return (
            <div className="container">
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 
                            点击组件后刷新页面，样式丢失
                            解决办法有三种
                                1.public/index.html中引入样式时不写 ./  写  / （常用）
                                2.public/index.html中引入样式时不写 ./  写  %PUBLIC_URL% （常用，只适用React脚手架）
                                3.使用HashRouter
                            */}
                            <MyNavLink to='/at/home'>Home</MyNavLink>
                            <MyNavLink to='/at/about'>About</MyNavLink>

                            {/* <NavLink activeClassName='myActive' className='list-group-item' to='/home'>Home</NavLink> */}
                            {/* <NavLink className='list-group-item' to='/home'>Home</NavLink>
                            <NavLink className='list-group-item' to='/about'>About</NavLink> */}
                        </div>
                    </div> 
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path='/at/about' component={About} />
                                    <Route path='/at/home' component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
