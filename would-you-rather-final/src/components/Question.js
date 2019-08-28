import React, { Component } from 'react';
import { connect } from 'react-redux';
import {formatQuestion} from '../utils/helpers.js';
import PollQuestion from './PollQuestion.js'
import "./style/index-question.css";



class Question extends Component {
    render() {
        console.log(this.props)

        const {
            avatar, choseOptionOne, choseOptionTwo, name, questionId, textOne, textTwo, timestamp
        } = this.props.question

        return (
            <div className="userQuestions">
                <div className="columnView">
                    <h2>
                        <span>{name +' '}</span> asks:
                    </h2>
                    <div className="userContent">
                        <img
                            src={avatar}
                            alt={name}
                        />
                        <div className="question">
                            <h3>Would you rather...</h3>
                            <p>{textOne + '...'}</p>
                            <button id="viewPoll" type="submit">View Poll</button>
                        </div>
                    </div>
                </div>
                {/*if not answered question then show Pollquestion, if answered show Balkendiagramm*/}
                {/* <PollQuestion id={this.props.id} question={this.props.question} authedUser={this.props.authedUser}/> */}
            </div>
        )}
}

function mapStateToProps({authedUser, users, questions}, {id}){
    const question = questions[id]

    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    }
}

export default connect(mapStateToProps)(Question)