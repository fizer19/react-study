/* 
    1.reducer本质是一个函数
    2.reducer接收两个参数，分别为：之前的状态（preState），动作对象（action)

*/
//preState=0初始化默认值
export default function countReducer(preState = 0, action) {
    console.log(preState);
    //从action身上获取type、data
    const {type, data} = action
    switch(type){
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
            
        default:
            return preState
    }
}