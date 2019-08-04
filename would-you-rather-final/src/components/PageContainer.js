import React, {Component} from 'react'
import Navigation from './navigation.js'
import Dashboard from './dashboard.js'
import { connect } from 'react-redux'


class PageContainer extends Component{
    render(){
        return(
            <div>
                <Navigation/>
                <Dashboard/>
            </div>
        )
    }
}

export default connect()(PageContainer)