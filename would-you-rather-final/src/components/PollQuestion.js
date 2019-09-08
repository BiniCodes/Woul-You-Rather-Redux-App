import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers.js';
import { handleSaveQuestionAnswer} from '../actions/questions'
import {Redirect} from 'react-router-dom'


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

        // this.setState(() => ({
        // }))
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
            avatar, choseOptionOne, choseOptionTwo, name, questionId, textOne, textTwo, timestamp
        } = this.props.question;

        const { value } = this.state

     
        if (this.state.isAnswered === true) {
            return <Redirect to={{
                pathname: "/questions/",
                state: { isQuestion: false },
            }}
            />
        }

        return(
            <div>
                <div>
                    <h2>
                        <span>{name + ' '}</span>
                        asks:
                    </h2>
                    <div className="userContent">
                        <img
                            src={avatar}
                            alt={name}
                        />
                        <div className="question">
                            <h3>Would you rather...</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="choiceOne">
                                    <label htmlFor="choiceOne">
                                        <input type="radio" id="contactChoice1" name="option" value={textOne} onChange={this.handleChange} checked={this.state.option === 'optionOne'}/>
                                        {textOne}
                                    </label>

                                </div>
                                <div className="choiceTwo">
                                    <label htmlFor="choiceTwo">
                                        <input type="radio" id="contactChoice2" name="option" value={textTwo} onChange={this.handleChange} checked={this.state.option === 'optionTwo'}/>
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

