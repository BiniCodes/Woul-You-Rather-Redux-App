import React, { Component } from 'react';
import { connect } from 'react-redux';
import {formatQuestion} from '../utils/helpers.js'


class Question extends Component {
    render() {
        console.log(this.props)

        const {
            avatar, choseOptionOne, choseOptionTwo, name, questionId, texOne, textTwo, timestamp
        } = this.props.question

        return (
            <div>{name}</div>
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