
import { createStore, applyMiddleware, combineReducers } from "redux";
// countReducer
import countReducer from './reducers/count'

//导入personReducer
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
//合并reducer
const allReducers = combineReducers({
    he:countReducer,
    persons:personReducer
})
//通过reducer创建store
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)) )