import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style/index-leaderboard.css'



class Leaderboard extends Component{

    state= {
        scores: [{id: "8xf0y6ziyjabvozdd253nd",
            totalScore: 0}]
    }


    render(){
        const {users , userIds} = this.props
        const {id} = this.state.scores

        return(
            <div id="leaderboard">
                <ul>
                {userIds.map((userId) =>{
                    const total = (userId)=>{
                        return (Object.keys(users[userId].answers).length) + (users[userId].questions.length)
                    }
                return(
                    <li id="leaderBoardItem" key={userId} >
                        <img src={users[userId].avatarURL} alt={users[userId].name} />
                        <div id="questionsSummary">
                            <h2>{users[userId].name}</h2>  
                            <p>Answered questions <span> {Object.keys(users[userId].answers).length}</span></p>  
                            <p>Created questions <span>{users[userId].questions.length}</span></p>  
                        </div>
                        <div id="score">
                            <h3>Score</h3>
                            <p>{(Object.keys(users[userId].answers).length) + (users[userId].questions.length)}</p>
                        </div>
                    </li>
                )}
                )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users } , {userIds}){
    return{
        users,
        userIds,
    }
}

export default connect(mapStateToProps)(Leaderboard);