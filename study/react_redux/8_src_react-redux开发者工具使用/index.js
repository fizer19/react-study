import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
ReactDOM.render(
    //Provider可以自动给所有容器组件传递store
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
)
