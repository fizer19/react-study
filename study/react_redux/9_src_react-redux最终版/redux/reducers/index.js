/* 
    该文件用于汇总所有的reducer
*/
import { combineReducers } from "redux";


// countReducer
import count from './count'

//导入personReducer
import persons from './person'

export default combineReducers({
    count,
    persons
})