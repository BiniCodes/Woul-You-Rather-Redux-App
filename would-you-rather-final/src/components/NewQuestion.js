import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'



class NewQuestion extends Component{

    state = {
        formControls: {
            optionOne: {
                value:''
            },
            optionTwo: {
                value:''
            }
        }
    }

    handleChange = (event) => {

        // zwischen valueOne und valueTwo target unterscheiden!
        const value = event.target.value;
        const name = event.target.name

        console.log(value)
        console.log(name)


        this.setState({
            formControls:{
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const value1 = this.state.formControls.optionOne.value
        const value2 = this.state.formControls.optionTwo.value
        const { dispatch } = this.props


        console.log(value1)
        console.log(value2)

        dispatch(handleSaveQuestion(value1, value2))

        this.setState({
            value1: '',
            value2:''
        });
    }
    



    render(){
        return(
            <div id="containerQuestions">
                <h2 id="newQuestionTitle">Create New Question</h2>
                <hr/>

                <div class="createQuestion">
                    <h3>Complete the question:</h3>
                    <h2>Would you rather...</h2>

                    <form onSubmit={this.handleSubmit}>
                        <input id="firstAnswer" name="optionOne" type="text" placeholder="Enter Option One Text Here" value={this.state.formControls.optionOne.value} onChange={this.handleChange}/>
                        <p>OR</p>
                        <input id="secondAnswer" name="optionTwo" type="text" placeholder="Enter Option Two Text Here" value={this.state.formControls.optionTwo.value} onChange={this.handleChange}/>

                        <button class="submitButton" type="submit">Submit</button>
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