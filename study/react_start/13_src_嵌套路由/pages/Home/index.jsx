import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import {Route,Switch,Redirect} from 'react-router-dom'
import Message from './Message'
import News from './News'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/Message'>Message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/home/message' component={Message}></Route>
                        <Route path='/home/news' component={News}></Route>
                        <Redirect to='/home/message'></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}
