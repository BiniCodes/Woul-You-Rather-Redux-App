import React, { Component , Fragment} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import { setAuthedUser } from '../actions/authedUser'
import './style/index-navigation.css'


class Navigation extends Component {

    handleLogout = (e) =>{
        this.props.dispatch(setAuthedUser(''))
        alert('You are logged out!')
    }
    
    render() {
        const { users, authedUser } = this.props;
        
        return(
            <div>
                <nav>
                    <ul className="questionList">
                        <li id="home">
                             <NavLink to="/dashboard">Home</NavLink>
                        </li>
                        <li id="newQuestion">
                            <NavLink to="/add/">New Question</NavLink>
                        </li>
                        <li id="leaderBoard">
                            <NavLink to="/leaderboard">Leader Board</NavLink>
                        </li>
                        <li id="helloUser">
                            {authedUser
                                ? (<Fragment><p>Hello, {users[authedUser].name}</p> <img src={users[authedUser].avatarURL} alt={users[authedUser].name}></img></Fragment>)
                                : null}
                                
                        </li>
                        <li id="LoginLogout">
                            {authedUser === ''
                                ? null
                                :<NavLink to="/login" onClick={this.handleLogout}>Logout</NavLink>}
                        </li>
                    </ul>
                </nav>
                <hr id="navigationUnderline"/>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    console.log(authedUser)

    return {
        authedUser,
        users  
    }
}


export default connect(mapStateToProps)(Navigation)