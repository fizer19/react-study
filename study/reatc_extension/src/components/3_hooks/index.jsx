import React from 'react'
import ReactDOM from 'react-dom'




/* class Demo extends React.Component {
    state = {count:0}
    myRef = React.createRef()
    add = () => {
        this.setState(state => ({count:state.count + 1}))
    }
    unMount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    show = () => {
        alert(this.myRef.current.value)
    }
    
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState(state => ({count:state.count + 1}))
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <button onClick={this.show}>弹出输入内容</button>
                <h2>当前求和为：{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.unMount}>卸载组件</button>
            </div>
        )
    }
} */

function Demo() {
    //使用state
    const [count, setCount] = React.useState(0) //底层优化了，整个函数刷新时，不会重复初始化
    //ref容器
    const myRef = React.useRef()

    function show() {
        alert(myRef.current.value)
    }

    //加1
    function add() {
        // setCount(count + 1)//第一种写法
        setCount(count => count + 1)
    }
    //卸载组件
    function unMount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    //模拟类组件中的生命周期，传递两个参数，第二个参数为要检测的数据，数据变化时整个函数组件重新执行
    React.useEffect(() => {
        let timer = setInterval(() =>
            setCount(count => count + 1), 1000
        )
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            <input type="text" ref={myRef} />
                <button onClick={show}>弹出输入内容</button>
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unMount}>卸载组件</button>
        </div>
    )
}
export default Demo