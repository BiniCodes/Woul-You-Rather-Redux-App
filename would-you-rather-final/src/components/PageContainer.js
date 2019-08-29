import React, {Component} from 'react'
import Navigation from './navigation.js'
import Dashboard from './dashboard.js'
import { connect } from 'react-redux'
import NewQuestion from './NewQuestion.js';
import Login from './Login.js';
import Results from './Results';
import Leaderboard from './Leaderboard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class PageContainer extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Navigation/>
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard/" exact component={() => <Dashboard ids={this.props.questionIds}/>} />
                    <Route path="/newQuestion/" component={NewQuestion} />
                    <Route path="/results/" component={() => <Results ids={this.props.questionIds} userIds={this.props.userIds}/>} />
                    <Route path="/leaderboard/" component={() => <Leaderboard userIds={this.props.userIds}/>} />
                    {/* <Dashboard ids={this.props.questionIds}/> */}
                    {/* <NewQuestion/> */}
                    {/* <Login/> */}
                    {/* <Results ids={this.props.questionIds} userIds={this.props.userIds}/> */}
                    {/* <Leaderboard userIds={this.props.userIds}/> */}
                </div>
            </Router>
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