import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'
// import About from './About'
// import Home from './Home'
import Loading from './Loading'//默认展示组件必须提前导入
const Home = lazy(()=> import('./Home'))//需要时导入
const About = lazy(()=> import('./About'))

export default class Demo extends Component {
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink className='list-group-item' to='/home'>Home</NavLink>
                            <NavLink className='list-group-item' to='/about'>About</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Suspense fallback={<Loading/>}>{/* fallback，路由加载过程中默认展示的组件或内容（可以是一个标签） */}
                                    <Route path='/about' component={About} />
                                    <Route path='/home' component={Home} />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
