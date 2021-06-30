import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class Header extends Component {

    goBack = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    go = () => {
        this.props.history.go(2)
    }
    render() {
        return (
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>
                <button onClick={this.goBack}>后退</button>
                    <button onClick={this.forward}>前进</button>
                    <button onClick={this.go}>go</button>
            </div>
        )
    }
}
export default withRouter(Header)
