import React, {Component} from 'react'
import {connect} from 'react-redux'


class Leaderboard extends Component{


    render(){
        const {users , userIds} = this.props

        return(
            <div>
                <ul>
                {userIds.map((userId) =>
                    <li key={userId} >
                        <img src={users[userId].avatarURL} alt={users[userId].name} />
                        <div>
                            <h2>{users[userId].name}</h2>  
                            <p>Answered questions <span> {Object.keys(users[userId].answers).length}</span></p>  
                            <p>Created questions <span>{users[userId].questions.length}</span></p>  
                        </div>
                        <div>
                            <h3>Score</h3>
                            <p>{(Object.keys(users[userId].answers).length) + (users[userId].questions.length)}</p>
                        </div>
                    </li>
                )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }){
    return{
        users,
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Leaderboard);