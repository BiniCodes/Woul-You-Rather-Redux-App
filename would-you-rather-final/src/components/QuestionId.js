import PollQuestion from './PollQuestion.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Results from './Results.js';

class QuestionId extends Component{
    render(){
        const isQuestion = this.props.location.state.isQuestion
        console.log(this.props.location.state.isQuestion)

        return(
            <div>
                {
                    isQuestion
                    ? <PollQuestion id={this.props.QuestionId} authedUser={this.props.authedUser}/>
                        : <Results id={this.props.QuestionId} userIds={this.props.userIds} authedUser={this.props.authedUser}/>
                }
            </div>
        )
    }
}

function mapStateToProps ({QuestionId, authedUser}, props){
    return{
        QuestionId,
        authedUser
    }
}

export default connect(mapStateToProps)(QuestionId)