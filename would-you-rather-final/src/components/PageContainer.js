import React, {Component , Fragment} from 'react'
import Navigation from './navigation.js'
import Dashboard from './dashboard.js'
import { connect } from 'react-redux'
import NewQuestion from './NewQuestion.js';
import Login from './Login.js';
import Results from './Results';
import Leaderboard from './Leaderboard';
import { BrowserRouter as Switch, Route, Router, Redirect, Link } from "react-router-dom";
import PollQuestion from './PollQuestion.js';
import NotFound from './404.js'
import QuestionId from './QuestionId.js';


const PrivateRoute = ({component: Component, authedUser, ...rest}) =>{
    console.log(authedUser)
    
    return(
        <Route {...rest} render={props => (
                authedUser
                ? <Component {...props} />
                : <Redirect to="/login" />
            )}
        />
    )           
}


class PageContainer extends Component{
    render(){
        let { authedUser } = this.props;
        return(
                <Switch>
                        <Navigation/>
                        <Route exact path="/login" component={Login} authedUser={authedUser} />
                        <PrivateRoute exact path="/dashboard/" component={Dashboard} ids={this.props.questionIds} authedUser={authedUser}/>
                        <PrivateRoute exact path="/questions/" component={QuestionId} ids={this.props.questionIds} userIds={this.props.userIds} authedUser={authedUser} />

                        <PrivateRoute path="/newQuestion/" component={NewQuestion} authedUser={authedUser} />
                        {/* <Route path="/dashboard/answeredQuestions/results/" exact component={() => <Results ids={this.props.questionIds} userIds={this.props.userIds}/>} /> */}
                        {/* <PrivateRoute path="/dashboard/unAnsweredQuestions/questions/" component={PollQuestion} authedUser={authedUser}/>                     */}
                        <PrivateRoute path="/leaderboard/" component={Leaderboard} authedUser={authedUser} />
                        <Route component={NotFound}/>

                </Switch>
        )
    }
}

function mapStateToProps({ questions, users , authedUser}) {

    return {
        questionIds: Object.keys(questions),
        userIds: Object.keys(users),
        authedUser
    }
}

export default connect(mapStateToProps)(PageContainer)