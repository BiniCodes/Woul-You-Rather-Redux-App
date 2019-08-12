import React, {Component} from 'react'
import Navigation from './navigation.js'
import Dashboard from './dashboard.js'
import { connect } from 'react-redux'
import PollQuestion from './PollQuestion.js';


class PageContainer extends Component{
    render(){
        return(
            <div>
                <Navigation/>
                <Dashboard ids={this.props.questionIds}/>
            </div>
        )
    }
}

function mapStateToProps({ questions}) {

    return {
        questionIds: Object.keys(questions),
    }
}

export default connect(mapStateToProps)(PageContainer)