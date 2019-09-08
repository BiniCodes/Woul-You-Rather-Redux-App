import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Question from './Question'
import { BrowserRouter as Switch, Route, Link, NavLink } from "react-router-dom";
import './style/index-dashboard.css'
import PollQuestion from './PollQuestion';
import Results from './Results';



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

        const { questions } = this.props
        // https://reacttraining.com/react-router/web/example/sidebar
        // https://stackoverflow.com/questions/33062830/using-react-router-with-a-layout-page-or-multiple-components-per-page

        return (
            <div id="listUserQuestions" className="columnView">
                <div id="answeredUnanswered" className="rowView">
                    <button id="unansweredQuestions" onClick={this.unanswerQuestion}>Unanswered</button>
                    <button id="answeredQuestions" onClick={this.answerQuestion}>Answered</button>
                </div>
                <ul>
                    {(this.state.answeredQuestion)
                        ? (
                            this.props.answeredIds.map((id) => (
                                <li key={id}>
                                    {console.log(this.props)}
                                    {/* {!((questions[questionId].optionOne.votes.includes(this.props.authedUser)) */}
                                    {/* || (questions[questionId].optionTwo.votes.includes(this.props.authedUser))) */}
                                    <Question id={id} userIds={this.props.answeredIds} answered={this.state.answeredQuestion}/>
                                    {/* // : null} */}
                                </li>))
                        )
                        : (
                            this.props.unansweredIds.map((id) => (
                                <li key={id}>
                                    {console.log(this.props)}
                                    {/* {!((questions[questionId].optionOne.votes.includes(this.props.authedUser)) */}
                                    {/* || (questions[questionId].optionTwo.votes.includes(this.props.authedUser))) */}
                                    <Question id={id} userIds={this.props.unansweredIds} answered={this.state.answeredQuestion}/>
                                    {/* // : null} */}
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

