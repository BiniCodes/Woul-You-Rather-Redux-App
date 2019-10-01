import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from "react-router-dom";
import './style/index-login.css'
import Pow from './img/pow.png'





class Login extends Component{
    
    state = {
        authedUser:'',
        loggedIn: false,
    }

    handleChange = (event) => {
        const authedUser = event.target.value
        console.log(authedUser)
        
        this.setState(() => ({
            authedUser,
        }))
    }

    handleSubmit = (event) =>{
        const authedUser = this.state.authedUser
        const {dispatch} = this.props

        event.preventDefault();
        console.log(authedUser)

        if(authedUser === ''){
            alert('Please select a user! :) ')
        } else{
            dispatch(setAuthedUser(authedUser))
            this.setState(() => ({
                loggedIn: true,
                authedUser: '',
            }))
        }      
    }

    render(){
        const { users } = this.props;
        const lastLocation = this.props.location.state;

        if ( this.state.loggedIn && lastLocation ) {
            return <Redirect to={ lastLocation } />
        } else if(this.state.loggedIn){
            return <Redirect to= "/dashboard" />
        }
        

        return(
            <div id="login"> 
                <div id="loginHead">
                    <h2>Welcome to the Would You Rather App!</h2>
                    <h3>Please sign in to continue</h3>
                </div>

                <hr/>

                <div id="loginArea">
                    <img className="centerElement" src={Pow} alt="React Redux Logo"/>

                        <form action="" onSubmit={this.handleSubmit}  >
                            <label>Sign In
                                <select className="centerElement" name="users" id="userslist" value={this.state.value} onChange={this.handleChange}>
                                    <option className="optionColor" value="" hidden defaultValue='selected'>Select User</option>
                                    {users.map((user)=>
                                        <option key={user.id} value={user.id}>{user.name}</option>
                                        )}
                                </select>
                                <button className="centerElement" type="submit">
                                    Sign In
                                </button>
                            </label>
                        </form>
                </div>

        </div>
        )
    }
}

function mapStateToProps({authedUser, users}){
    return{
        authedUser,
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)
