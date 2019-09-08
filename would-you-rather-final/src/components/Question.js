import React, { Component } from 'react';
import { connect } from 'react-redux';
import {formatQuestion} from '../utils/helpers.js';
import { setQuestionId } from '../actions/questionId'
import PollQuestion from './PollQuestion.js';
import { BrowserRouter as Switch, Route, Link , Redirect } from "react-router-dom";
import "./style/index-question.css";



class Question extends Component {

    state={
        toQuestion : false,
        toResult: false, 
        id: '',
    }

    handleClickQuestion = (e) =>{
        e.preventDefault();
        console.log("Question should be shown " + e.target.value);
        const questionId = e.target.value

        const {dispatch} = this.props
// https://stackoverflow.com/questions/41726021/react-component-props-only-changing-after-second-onclick-event
        dispatch(setQuestionId(questionId))

        this.setState(()=> ({
            toQuestion: true,
        }))
    }

    handleClickResult = (e) => {
        e.preventDefault();
        console.log("Result should be shown for " + e.target.value) ;

        const questionId = e.target.value

        const { dispatch } = this.props

        dispatch(setQuestionId(questionId))

        this.setState(() => ({
            toResult: true,
        }))

    }

    render() {
        console.log(this.props)
        console.log(this.state.id)


        const {
            avatar, choseOptionOne, choseOptionTwo, name, questionId, textOne, textTwo, timestamp
        } = this.props.question


        // if ((this.state.toQuestion || this.state.toResult) === true){
        //     return <Redirect to= {{
        //         path:"/questions/",
        //         state: {toQuestion:this.state.toQuestion}
        //         }}
        //     />
        // }
        if (this.state.toQuestion === true) {
            return <Redirect to={{
                pathname: `/questions/${this.props.questionId}`,
                state: { isQuestion: true},
            }}
            />
        } 
        if (this.state.toResult === true){
            return <Redirect to={{
                pathname: `/questions/${this.props.questionId}`,
                state: { isQuestion: false },
            }}
            />
        } 


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
                            {!(this.props.answered)
                                ? <button id="viewPoll" value={questionId} onClick={this.handleClickQuestion}>View Question</button>
                                : <button id="viewResult" value={questionId} onClick={this.handleClickResult}>View Result</button>
                        }                                
                        </div>

                    </div>
                </div>
                {/*if not answered question then show Pollquestion, if answered show Balkendiagramm*/}
                {/* <PollQuestion id={this.props.id} question={this.props.question} authedUser={this.props.authedUser}/> */}
            </div>
        )}
}

function mapStateToProps({authedUser, users, questions, questionId}, {id, answered}){
    const question = questions[id]

    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser),
        questions,
        answered,
        id,
        questionId,
    }
}

export default connect(mapStateToProps)(Question)