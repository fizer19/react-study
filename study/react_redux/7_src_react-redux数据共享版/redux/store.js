
import { createStore, applyMiddleware, combineReducers } from "redux";
// countReducer
import countReducer from './reducers/count'

//导入personReducer
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'


//合并reducer
const allReducers = combineReducers({
    he:countReducer,
    persons:personReducer
})
//通过reducer创建store
export default createStore(allReducers,applyMiddleware(thunk) )