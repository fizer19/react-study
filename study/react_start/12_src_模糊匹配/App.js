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
                            
                            <MyNavLink to='/about'>About</MyNavLink>
                            {/* 路由模糊匹配 */}
                            <MyNavLink to='/home/a/b'>Home</MyNavLink>

                            
                        </div>
                    </div> 
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Switch>
                                    <Route path='/about' component={About} />
                                    <Route exact path='/home' component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
