import React, {Component} from 'react'
import {connect} from 'react-redux'

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
            <div>
                <h2>Asked by {name} </h2>
                <img src={img} alt={name}/>

                <h1>Results: </h1>

                <p>Would you rather {optionOne} ?</p>
                <h3> {votesOne} out of {totalVotes} votes</h3>
                {/* <p>{
                    (questions[id].optionOne.votes.includes[user])
                    ? console.log('This is your choice.' + user)
                    : null
                    }
                </p> */}


                <p>Would you rather {optionTwo} ?</p>
                <h3> {votesTwo} out of {totalVotes} votes</h3>
                {/* <p>{
                    (questions[id].optionTwo.votes.includes[user])
                        ? 'This is your choice.'
                        : null
                }
                </p> */}

            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }, {ids}) {
    return {
        ids,
        authedUser,
        questions,
        users,
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Results)