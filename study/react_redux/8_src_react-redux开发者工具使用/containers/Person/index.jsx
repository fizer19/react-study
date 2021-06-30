import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { connect } from 'react-redux'
import {addPersonAction} from '../../redux/actions/person'
class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = {id:nanoid(),name,age}
        this.props.addOnePerson(personObj)
        this.nameNode.value = '';
        this.ageNode.value = '';
    }
    render() {
        return (
            <div>
                <h1>我是Person组件，上方组件求和为{this.props.he}</h1>
                <input ref={c =>this.nameNode = c} placeholder="请输入名字" type="text" />
                <input ref={c =>this.ageNode = c} placeholder="请输入年龄" type="number" />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map(p => {
                            return <li key={p.id}>{p.name}--{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({persons:state.persons, he:state.he}),
    {addOnePerson:addPersonAction}
)(Person)
