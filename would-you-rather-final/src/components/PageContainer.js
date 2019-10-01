import React, {Component} from 'react'
import Navigation from './navigation.js'
import Dashboard from './dashboard.js'
import { connect } from 'react-redux'
import NewQuestion from './NewQuestion.js';
import Login from './Login.js';
import Leaderboard from './Leaderboard';
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import NotFound from './404.js'
import QuestionId from './QuestionId.js';


const PrivateRoute = ({component: Component, authedUser, ...rest}) =>{
    console.log(authedUser)
    
    return(
        <Route {...rest} render={props => (
                authedUser
                ? <Component {...props} />
                : <Redirect to={{
                    to: "/",
                    state:{ from:props.location }
                }}/>
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
                        <Route exact path="/" component={Login} authedUser={authedUser} />
                        <PrivateRoute exact path="/dashboard" component={Dashboard} ids={this.props.questionIds} authedUser={authedUser}/>
                        <PrivateRoute exact path="/questions/:id" component={QuestionId} ids={this.props.questionIds} userIds={this.props.userIds} authedUser={authedUser} />
                        <PrivateRoute exact path="/add/" component={NewQuestion} authedUser={authedUser} />
                        <PrivateRoute exact path="/leaderboard/" component={Leaderboard} authedUser={authedUser} />
                        <PrivateRoute path="/error" component={NotFound}/>
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