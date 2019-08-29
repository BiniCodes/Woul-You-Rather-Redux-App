import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                            {authedUser === null
                            ? <Link to="/login">Home</Link>
                            : <Link to="/dashboard">Home</Link>}
                        </li>
                        <li id="newQuestion">
                            <Link to="/newQuestion/">New Question</Link>
                        </li>
                        <li id="leaderBoard">
                            <Link to="/leaderboard">Leader Board</Link>
                        </li>
                        <li id="helloUser">
                            <p>Hello, {authedUser === null
                                ? null
                                : users[authedUser].name}</p>
                            <img src={authedUser === null
                                ? null
                                : users[authedUser].avatarURL } alt=""></img>
                        </li>
                        <li id="LoginLogout">
                            <Link to="/login" onClick={this.handleLogout}>Logout</Link>
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