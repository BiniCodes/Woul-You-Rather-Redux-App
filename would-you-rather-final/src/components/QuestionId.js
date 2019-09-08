import PollQuestion from './PollQuestion.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Switch, Route, Link, Redirect } from "react-router-dom";
import Results from './Results.js';

// Pollquestion and Result here
// toggle between the state of question if to show result or poll component

class QuestionId extends Component{
    render(){
        const isQuestion = this.props.location.state.isQuestion
        console.log(this.props.location.state.isQuestion)

        return(
            <div>
                {
                    isQuestion
                    ? <PollQuestion authedUser={this.props.authedUser}/>
                    : <Results userIds={this.props.userIds} authedUser={this.props.authedUser}/>
                }
            </div>
        )
    }
}

export default QuestionId