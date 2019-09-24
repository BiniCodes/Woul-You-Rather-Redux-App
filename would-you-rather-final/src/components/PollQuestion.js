import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers.js';
import { handleSaveQuestionAnswer} from '../actions/questions'
import {Redirect} from 'react-router-dom'
import "./style/index-pollquestion.css";


class PollQuestion extends Component{

    state = {
        value: '',
        option: '',
        isAnswered: false,
    }   

    handleChange = (event) => {
        const value = event.target.value

        const {option } = this.state

        event.preventDefault();
        console.log(event.target.value)
        console.log(this.state.value)

        const{ id} = this.props

        value === this.props.questions[id].optionOne.text
                ? this.setState(() => ({
                    option : 'optionOne',
                    value
                }))
                : this.setState(() => ({
                    option : 'optionTwo',
                    value
                })) 

          console.log(option)
    }


    handleSubmit = (event) => {
        event.preventDefault();

        const { value, option } = this.state

        console.log('You chose Answer:', value, ' which is ', option)

        const{ dispatch,authedUser,id} = this.props
      
        if(this.state.option === ''){
            alert('Please choose an option')
        } else{
            dispatch(handleSaveQuestionAnswer({
                qid: id,
                authedUser,
                answer: option
            }))

            this.setState(() => ({
                value: '',
                option: '',
                isAnswered:true,
            }))
            
        }
    }


    
    render(){
        console.log(this.props.id)

        const {
            avatar, name, textOne, textTwo
        } = this.props.question;


        if (this.state.isAnswered === true) {
            return <Redirect to={{
                pathname: `/questions/${this.props.questionId}`,
                state: { isQuestion: false },
            }}
            />
        }

        return(
            <div className="userPoll">
                <div className="columnView">
                    <h2>
                        <span>{name + ' '}</span>
                        asks:
                    </h2>
                    <div className="userContentPoll">
                        <img
                            src={avatar}
                            alt={name}
                        />
                        <div className="question">
                            <h3>Would you rather...</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="choiceOne">
                                    <label htmlFor="choiceOne">
                                        <input type="radio" id="contactChoice1" className="labelText" name="option" value={textOne} onChange={this.handleChange} checked={this.state.option === 'optionOne'}/>
                                        {textOne}
                                    </label>

                                </div>
                                <div className="choiceTwo">
                                    <label htmlFor="choiceTwo">
                                        <input type="radio" id="contactChoice2" className="labelText" name="option" value={textTwo} onChange={this.handleChange} checked={this.state.option === 'optionTwo'}/>
                                        {textTwo}
                                    </label>
                                </div>
                                {/* {After submit change to the Results component} */}
                                <button type="submit" id="submitButton" value="Submit"> Save </button>
                            </form>
                        </div>
                    </div>
                </div>            
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions , questionId }) {
    const question = questions[questionId]

    return {
        authedUser,
        id: questionId,
        question: formatQuestion(question, users[question.author], authedUser),
        questions,
    }
}

export default connect(mapStateToProps)(PollQuestion)

