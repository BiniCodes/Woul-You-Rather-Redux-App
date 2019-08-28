import React, {Component} from 'react'
import Navigation from './navigation.js'
import Dashboard from './dashboard.js'
import { connect } from 'react-redux'
import NewQuestion from './NewQuestion.js';
import Login from './Login.js';
import Results from './Results';
import Leaderboard from './Leaderboard';



class PageContainer extends Component{
    render(){
        return(
            <div>
                <Navigation/>
                {/* <Dashboard ids={this.props.questionIds}/> */}
                <NewQuestion/>
                {/* <Login/> */}
                {/* <Results ids={this.props.questionIds} userIds={this.props.userIds}/> */}
                {/* <Leaderboard userIds={this.props.userIds}/> */}
            </div>
        )
    }
}

function mapStateToProps({ questions, users}) {

    return {
        questionIds: Object.keys(questions),
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(PageContainer)