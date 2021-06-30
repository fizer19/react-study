
import { createStore } from "redux";
// 导入reducer
import countReducer from './count_reducer'
//通过reducer创建store
export default createStore(countReducer)