import React, { Component } from 'react';
import { connect } from 'react-redux';
import {formatQuestion} from '../utils/helpers.js'


class Question extends Component {
    render() {
        console.log(this.props)

        const {
            avatar, choseOptionOne, choseOptionTwo, name, questionId, textOne, textTwo, timestamp
        } = this.props.question

        return (
            <div>
                <div>
                    <h2>
                        <span>{name +' '}</span> 
                    asks:
                    </h2>
                    <div>
                        <img
                            src={avatar}
                            alt={name}
                        />
                        <div>
                            <h3>Would you rather...</h3>
                            <div className="choiceOne">
                                <label htmlFor="choiceOne">
                                    {textOne}
                                    <input type="radio" id="contactChoice1" name="contact" value="email" checked/>
                                </label>

                            </div>
                            <div className="choiceTwo">
                                <label htmlFor="choiceTwo">
                                    {textTwo}
                                    <input type="radio" id="contactChoice2" name="contact" value="phone"/>
                                </label>
                            </div>
                            <button id="submitButton" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
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