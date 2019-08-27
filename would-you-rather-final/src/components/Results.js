import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style/index-result.css'

class Results extends Component{

    state={
        id: "8xf0y6ziyjabvozdd253nd",
        choice:'Your choice'
    }
    
    render(){
        //Current id for testing 
        const {id} = this.state
        const { userIds, users, questions} = this.props
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

        

        console.log(totalVotes)
    


        return(
            <div id="containerPoll" className="columnView">
                <h2 className="listUserTitle">Asked by {name} </h2>
                <div className="rowView pollSolutionContent">
                    <img src={img} alt={name}/>
                    
                    <div className="columnView pollSolution">
                        <h1>Results: </h1>
                        <div className="choiceOneSolution">
                            <p>Would you rather {optionOne} ?</p>
                            <div className="resultBarOne">
                                <div className="resultOnePercentageBar">
                                    <span className="resultOnePercentage">66,7%</span>
                                </div>
                                <h3 className="voteChoiceOne"> {votesOne} out of {totalVotes} votes</h3>
                                {/* <p>{
                                    (questions[id].optionOne.votes.includes[user])
                                    ? console.log('This is your choice.' + user)
                                    : null
                                    }
                                </p> */}
                            </div>
                        </div>
                        <div className="choiceTwoSolution">
                            <p>Would you rather {optionTwo} ?</p>
                            <div className="resultBarTwo">
                                <div className="resultTwoPercentageBar">
                                    <span className="resultTwoPercentage">33,3%</span>
                                </div>
                                <h3 className="voteChoiceTwo"> {votesTwo} out of {totalVotes} votes</h3>
                                {/* <p>{
                                    (questions[id].optionTwo.votes.includes[user])
                                        ? 'This is your choice.'
                                        : null
                                }
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, {ids, userIds}) {
    return {
        ids,
        authedUser,
        questions,
        users,
        userIds
    }
}

export default connect(mapStateToProps)(Results)