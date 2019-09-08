import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style/index-result.css'

class Results extends Component{
    
    render(){
        const { userIds, users, questions , id , authedUser} = this.props
        const { author } = this.props.questions[id]

        // Add the right username with first and last name
        const user = userIds.filter((userId) => userId === author)

        const name = users[user].name
        const img = users[user].avatarURL

        const optionOne = questions[id].optionOne.text
        const optionTwo = questions[id].optionTwo.text

        const votesOne = questions[id].optionOne.votes.length
        const votesTwo = questions[id].optionTwo.votes.length
        const totalVotes = votesOne + votesTwo

        const percentageVotes = ((totalVotes, vote) =>{
                                    return (Math.round((100 / totalVotes * vote)) + '%')
                                }) 


        return(
            <div id="containerPoll" className="columnView">
                <h2 className="listUserTitle">Asked by {name} </h2>
                <div className="rowView pollSolutionContent">
                    <img src={img} alt={name}/>
                    
                    <div className="columnView pollSolution">
                        <h1>Results: </h1>
                        <div id="choiceOneSolution"
                            className={
                                (questions[id].optionOne.votes.includes(authedUser)) 
                                ? 'chosen'
                                :null
                                }
                        >
                            <p>Would you rather {optionOne} ?</p>
                            <div className="resultBarOne">
                                <div className="resultOnePercentageBar" style={{ width: percentageVotes(totalVotes, votesOne)}}>
                                    <span className="resultOnePercentage">{percentageVotes(totalVotes,votesOne)}</span>
                                </div>
                                <h3 className="voteChoiceOne"> {votesOne} out of {totalVotes} votes</h3>
                                {/* {
                                    (questions[id].optionOne.votes.includes(authedUser))
                                    ? console.log('This is your choice.' + authedUser)
                                        : console.log('NOPE')
                                    } */}
                            </div>
                        </div>
                        <div id="choiceTwoSolution"
                            className={
                                (questions[id].optionTwo.votes.includes(authedUser))
                                    ? 'chosen'
                                    : null
                            }

                        >
                            <p>Would you rather {optionTwo} ?</p>
                            <div className="resultBarTwo">
                                <div className="resultTwoPercentageBar" style={{ width: percentageVotes(totalVotes, votesTwo)}}>
                                    <span className="resultTwoPercentage">{percentageVotes(totalVotes,votesTwo)}</span>
                                </div>
                                <h3 className="voteChoiceTwo"> {votesTwo} out of {totalVotes} votes</h3>
                                {
                                    console.log((questions[id].optionTwo.votes).includes(authedUser))
                                        // ? console.log('This is your choice.' + authedUser)
                                        // :console.log('NOPE')
                                         
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users, questionId }, {ids}) {
    return {
        id: questionId,
        authedUser,
        questions,
        users,
        userIds: Object.keys(users),    }
}

export default connect(mapStateToProps)(Results)