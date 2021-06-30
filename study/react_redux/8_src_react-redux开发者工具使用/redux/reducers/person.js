
import {ADD_PERSON} from '../constant'
//初始化
const initState = [{id:'001',name:'tom',age:29}]
export default function personReducer(preState = initState,action) {
    const {type,data} = action
    switch (type){
        case ADD_PERSON:
            // preState.unshift(data) //preState被改写，personReducer不是纯函数了，
            // return preState //修改前后preState都是同一个地址，页面不会更新
            return [data,...preState]
        default:
            return preState;
    }
}