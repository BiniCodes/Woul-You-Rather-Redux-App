import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'
import './style/index-newQuestion.css'
import { Redirect } from "react-router";




class NewQuestion extends Component{

    state = {
        formControls: {
            textOne: {
                text:''
            },
            textTwo: {
                text:''
            }
        },
        
        toDashboard: false,
    }

    handleChange = (event) => {

        // zwischen valueOne und valueTwo target unterscheiden!
        const text = event.target.value;
        const name = event.target.name

        console.log(text)
        console.log(name)


        this.setState({
            formControls:{
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    text
                }
            }
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const textOne = this.state.formControls.textOne.text
        const textTwo = this.state.formControls.textTwo.text
        const { dispatch } = this.props


        //console.log(textOne)
        // console.log(textTwo)

        if (textOne === '' && textTwo === ''){
            alert("Please enter two options.")
        } else {
            dispatch(handleSaveQuestion(textOne, textTwo))

            this.setState(() => ({
                formControls: {
                    textOne: {
                        text: ''
                    },
                    textTwo: {
                        text: ''
                    }
                },
                toDashboard: true
            }))

            console.log(this.state)
        }
}
    

    render(){

        console.log(this.state)
        
        if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard' />
        }
        
        return(
            <div id="containerQuestions">
                <h2 id="newQuestionTitle">Create New Question</h2>
                <hr/>

                <div className="createQuestion">
                    <h3>Complete the question:</h3>
                    <h2>Would you rather...</h2>

                    <form onSubmit={this.handleSubmit}>
                        <input id="firstAnswer" name="textOne" type="text" placeholder="Enter Option One Text Here" value={this.state.formControls.textOne.value} onChange={this.handleChange}/>
                        <p>OR</p>
                        <input id="secondAnswer" name="textTwo" type="text" placeholder="Enter Option Two Text Here" value={this.state.formControls.textTwo.value} onChange={this.handleChange}/>

                        <button className="submitButton" type="submit">Submit</button>
                    </form>
                </div>
            </div>        
    )
    }
}

function mapStateToProps({ authedUser,questions }) {

    return {
        authedUser,
        questions,
    }
}

export default connect(mapStateToProps)(NewQuestion);