import React, { Component } from 'react'

const detailData = [
    {id: '1', content:'你好中国'},
    {id: '2', content:'你好广东'},
    {id: '3', content:'你好江西'},
]
export default class Detail extends Component {
    
    render() {
        console.log(this.props);
        // 接收params参数
        const {id,message} = this.props.match.params
        const findResult = detailData.find(detailObj => {
            return detailObj.id === id
        })
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
