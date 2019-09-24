import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style/index-leaderboard.css'



class Leaderboard extends Component{

    render(){
        const {users} = this.props

        const answeredQuestions = (x) =>{
            return Object.keys(x.answers).length
        }

        const createdQuestions = (x) => {
            return x.questions.length
        }

        const total = (x) => {
            return (answeredQuestions(x) + createdQuestions(x))
        }

        const sort = (users) =>{
            let leaderList = Object.values(users).sort((a, b) => {
            let totalA = total(a)
            let totalB = total(b)

            return totalB - totalA
        })
        return leaderList;
    }

        return(

            <div >

                <ul id="leaderboard">

                {sort(users).map((user) =>{
                    return(
                        <li id="leaderBoardItem" key={user.id} >
                            <img src={user.avatarURL} alt={user.name} />
                            <div id="questionsSummary">
                                <h2>{user.name}</h2>  
                                <p>Answered questions <span> {answeredQuestions(user)}</span></p>  
                                <p>Created questions <span>{createdQuestions(user)}</span></p>  
                            </div>
                            <div id="score">
                                <h3>Score</h3>
                                <p>{answeredQuestions(user) + createdQuestions(user)}</p>
                            </div>
                        </li>
                    )})
                }

                </ul>

            </div>

        )
    }
}

function mapStateToProps({ users }){
    return{
        users,
    }
}

export default connect(mapStateToProps)(Leaderboard);