import React, { Component , Fragment} from 'react'
import { connect } from 'react-redux'
import {NavLink} from "react-router-dom";
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
            <div id="menu">

                <nav id="navigation">
                    <ul className="questionList">

                        <li id="home">
                            <NavLink to="/dashboard" activeClassName="selected">Home</NavLink>
                        </li>

                        <li id="newQuestion">
                            <NavLink to="/add/" activeClassName="selected">New Question</NavLink>
                        </li>

                        <li id="leaderBoard">
                            <NavLink to="/leaderboard/" activeClassName="selected">Leader Board</NavLink>
                        </li>

                        {authedUser
                        ?   <li id="helloUser">
                             <Fragment><p>Hello, {users[authedUser].name}</p> <img src={users[authedUser].avatarURL} alt={users[authedUser].name}></img></Fragment>
                            </li>
                        : null}
                        
                        {authedUser === ''
                        ? null
                        :   <li id="LoginLogout">
                                <NavLink to="/" onClick={this.handleLogout} activeClassName="selected">Logout</NavLink>
                            </li>
                        }

                    </ul>
                </nav>

                <hr id="navigationUnderline"/>

            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    //console.log(authedUser)

    return {
        authedUser,
        users  
    }
}


export default connect(mapStateToProps)(Navigation)