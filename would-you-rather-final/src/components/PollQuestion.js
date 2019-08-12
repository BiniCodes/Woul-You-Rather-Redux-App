import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../utils/helpers.js';
import { saveQuestionAnswer } from '../utils/api.js';
 





class PollQuestion extends Component{

    state = {
        value: '',
    }

    handleChange = (event) => {
        const value = event.target.value

        event.preventDefault();
        console.log(event.target.value)

        this.setState(() => ({
            value
        }))
        console.log(this.state.value)
    }


    handleSubmit = (event) => {
        event.preventDefault();

        const { value } = this.state

        console.log('You chose Answer:', value)

        //saveQuestionAnswer(event.target.value);

        this.setState(() => ({
            value: ''
        }))
    }


    
    render(){

        const {
            avatar, choseOptionOne, choseOptionTwo, name, questionId, textOne, textTwo, timestamp
        } = this.props.question;

        const { value } = this.state

        {/* Redirect to Question View after submitting*/}
     

        return(
            <div>
                <div>
                    <h2>
                        <span>{name + ' '}</span>
                        asks:
                    </h2>
                    <div>
                        <img
                            src={avatar}
                            alt={name}
                        />
                        <div>
                            <h3>Would you rather...</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="choiceOne">
                                    <label htmlFor="choiceOne">
                                        {textOne}
                                        <input type="radio" id="contactChoice1" name="option" value={textOne} onChange={this.handleChange} checked={value === {textOne}}/>
                                    </label>

                                </div>
                                <div className="choiceTwo">
                                    <label htmlFor="choiceTwo">
                                        {textTwo}
                                        <input type="radio" id="contactChoice2" name="option" value={textTwo} onChange={this.handleChange} checked={value === {textTwo}}/>
                                    </label>
                                </div>
                                <button type="submit" id="submitButton" value="Submit"> Save </button>
                            </form>
                        </div>
                    </div>
                </div>            
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
    const question = questions[id]

    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    }
}

export default connect(mapStateToProps)(PollQuestion)

