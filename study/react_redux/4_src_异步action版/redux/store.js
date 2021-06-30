
import { createStore, applyMiddleware } from "redux";
// 导入reducer
import countReducer from './count_reducer'

//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//通过reducer创建store
export default createStore(countReducer, applyMiddleware(thunk))