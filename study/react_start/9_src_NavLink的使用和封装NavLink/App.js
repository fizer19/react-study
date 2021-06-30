import React, { Component } from 'react'
import {  Route } from 'react-router-dom'
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
                    <Header/>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to='/home'>Home</MyNavLink>
                            <MyNavLink to='/about'>About</MyNavLink>
                            {/* <NavLink activeClassName='myActive' className='list-group-item' to='/home'>Home</NavLink> */}
                            {/* <NavLink className='list-group-item' to='/home'>Home</NavLink>
                            <NavLink className='list-group-item' to='/about'>About</NavLink> */}
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path='/about' component={About} />
                                <Route path='/home' component={Home} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
