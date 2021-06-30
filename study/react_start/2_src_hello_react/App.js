
// 使用了分别暴露的形式暴露了Component，并非解构赋值
import React, {Component} from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome'
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}
