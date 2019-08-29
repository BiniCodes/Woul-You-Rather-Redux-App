import React, {Component} from 'react';
import { connect } from 'react-redux'
import Question from './Question' 
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import './style/index-dashboard.css'


class AnsweredQuestions extends Component {
    render() {
        const { questions } = this.props

        return (
            <div>
                <ul>
                    {this.props.ids.map((questionId) => (
                        <li key={questionId}>
                            {console.log(this.props)}
                            {((questions[questionId].optionOne.votes.includes(this.props.authedUser))
                                || (questions[questionId].optionTwo.votes.includes(this.props.authedUser)))
                                ? <Question id={questionId} />
                                : null}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

class UnansweredQuestions extends Component {
    render() {
        const { questions } = this.props

        return (
            <div>
                <ul>
                    {this.props.ids.map((questionId) => (
                        <li key={questionId}>
                            {console.log(this.props)}
                            {!((questions[questionId].optionOne.votes.includes(this.props.authedUser))
                                || (questions[questionId].optionTwo.votes.includes(this.props.authedUser)))
                                ? <Question id={questionId} />
                                : null}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}


class Dashboard extends Component{
    render() {

        const {questions} = this.props

        return(
            <div id="listUserQuestions">
                
                <Switch>
                    <div className="columnView">

                        <div id="answeredUnanswered">

                            <Link to="/dashboard/unAnsweredQuestions">
                                <h2 id="unansweredQuestions">Unanswered Questions</h2>
                            </Link>

                            <Link to="/dashboard/answeredQuestions">
                                <h2 id="answeredQuestions">Answered Questions</h2>
                            </Link>
                            
                        </div>

                        <Route path="/dashboard" exact component={() => <UnansweredQuestions ids={this.props.ids} questions={questions} authedUser={this.props.authedUser} />} />
                        <Route path="/dashboard/answeredQuestions" exact component={() => <AnsweredQuestions ids={this.props.ids} questions={questions} authedUser={this.props.authedUser} />} />
                        <Route path="/dashboard/unAnsweredQuestions" exact component={() => <UnansweredQuestions ids={this.props.ids} questions={questions} authedUser={this.props.authedUser} />} />


                        
                        {/* <UnansweredQuestions ids={this.props.ids} questions={questions} authedUser={this.props.authedUser}/>
                        // <AnsweredQuestions ids={this.props.ids} questions={questions} authedUser={this.props.authedUser} /> */}
                        
                    </div>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser} , {ids}) {
    return {
        questions,
        ids,
        authedUser,
    }
}

export default connect(mapStateToProps)(Dashboard) 

