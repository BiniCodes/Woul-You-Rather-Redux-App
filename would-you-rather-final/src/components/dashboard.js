import React, {Component} from 'react';
import { connect } from 'react-redux'
import Question from './Question' 
import './style/index-dashboard.css'



class Dashboard extends Component{
    render() {

        const {questions} = this.props

        return(
            <div id="listUserQuestions">
                <div id="answeredUnanswered" className="rowView">
                    {/* <div className="columnView">
                        <a href="" clasName="clickedTab">
                            <h2 id="unansweredQuestions">Unanswered Questions</h2>
                        </a>

                        <ul>
                            {this.props.ids.map((questionId) => (
                                <li key={questionId}>
                                    {console.log(this.props)}
                                    {((!(questions[questionId].optionOne.votes.includes(this.props.authedUser)))
                                        && (!(questions[questionId].optionTwo.votes.includes(this.props.authedUser))))
                                        ? <Question id={questionId} />
                                        : null}
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    <div className="columnView">
                        <a href="">
                            <h2 id="answeredQuestions">Answered Questions</h2>
                        </a>

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
                </div>
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