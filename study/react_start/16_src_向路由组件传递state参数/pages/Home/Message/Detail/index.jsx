import React, { Component } from 'react'
// import qs from 'querystring'
const detailData = [
    {id: '1', content:'你好中国'},
    {id: '2', content:'你好广东'},
    {id: '3', content:'你好江西'},
]
export default class Detail extends Component {
    
    render() {
        console.log(this.props);
        // 接收params参数
        // let search = this.props.location.search     
        // const {id,message} = qs.parse(search.slice(1))
        const {id, message}  = this.props.location.state || {}
        const findResult = detailData.find(detailObj => {
            return detailObj.id === id
        }) || {}
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{message}</li>
                    <li>IMFORMATION:{findResult.content}</li>
                </ul>
            </div>
        )
    }
}
