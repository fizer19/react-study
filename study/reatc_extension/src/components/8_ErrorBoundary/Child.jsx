import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        // users: [
        //     {id:'001',name:'tom',age:19},
        //     {id:'002',name:'jerry',age:16},
        //     {id:'003',name:'luci',age:15},
        // ]
        users:'abc'
    }
    render() {
        return (
            <div>
                <h3>我是Child组件</h3>
                {
                    this.state.users.map(item => {
                        return <h4 key={item.id}>{item.name}--{item.age}</h4>
                    })
                }
            </div>
        )
    }
}
