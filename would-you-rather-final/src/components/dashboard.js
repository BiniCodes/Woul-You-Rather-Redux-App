import React, { Component} from 'react';
import { connect } from 'react-redux'
import Question from './Question'
import './style/index-dashboard.css'


class Dashboard extends Component {
    state = {
        answeredQuestion: false
    }

    unanswerQuestion = (e) => {
        e.preventDefault();
        this.setState(() => ({
            answeredQuestion: false,
        }))
    }
    answerQuestion = (e) => {
        e.preventDefault();
        this.setState(() => ({
            answeredQuestion: true,
        }))
    }

    render() {
        return (
            <div id="listUserQuestions" className="columnView">

                <div id="answeredUnanswered" className="rowView">
                    <button id="unansweredQuestions" 
                            className={
                                (this.state.answeredQuestion)
                                ? "isNotSelected"
                                : "isSelected"
                            }
                        onClick={this.unanswerQuestion}>Unanswered
                    </button>

                    <button id="answeredQuestions" 
                        className={
                            (this.state.answeredQuestion)
                                ? "isSelected"
                                : "isNotSelected"
                        }
                        onClick={this.answerQuestion}>Answered
                    </button>
                </div>

                <ul>
                    {(this.state.answeredQuestion)
                        ? (
                            this.props.answeredIds.map((id) => (
                                <li key={id}>
                                    {console.log(this.props)}
                                    <Question id={id} userIds={this.props.answeredIds} answered={this.state.answeredQuestion}/>
                                </li>))
                        )
                        : (
                            this.props.unansweredIds.map((id) => (
                                <li key={id}>
                                    {console.log(this.props)}
                                    <Question id={id} userIds={this.props.unansweredIds} answered={this.state.answeredQuestion}/>
                                </li>))
                        )
                    }
                </ul>

            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser, users }) {
    return {
        questions,

        answeredIds: Object.keys(questions).filter((questionId) => ((questions[questionId].optionOne.votes.includes(authedUser))
            || (questions[questionId].optionTwo.votes.includes(authedUser))))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),

        unansweredIds: Object.keys(questions).filter((questionId) => !((questions[questionId].optionOne.votes.includes(authedUser))
            || (questions[questionId].optionTwo.votes.includes(authedUser))))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),

        authedUser,

        userIds: Object.keys(users),
    }
}

export default connect(mapStateToProps)(Dashboard)

