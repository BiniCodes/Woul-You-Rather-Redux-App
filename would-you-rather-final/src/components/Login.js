import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'
import './style/index-login.css'
import Superheroes from './img/superheroes.jpg'




class Login extends Component{
    
    state = {
        authUser:'',
    }

    handleChange = (event) => {
        const authUser = event.target.value
        console.log(authUser)
        
        this.setState(() => ({
            authUser
        }))
    }

    handleSubmit = (event) =>{
        const {authUser} = this.state
        const {dispatch} = this.props

        event.preventDefault();
        console.log(authUser)

        dispatch(setAuthedUser({
            id: authUser,
        }))
        
    }

    render(){
        return(
            <div id="login"> 
                <div id="loginHead">
                    <h2>Welcome to the Would You Rather App!</h2>
                    <h3>Please sign in to continue</h3>
                </div>

                <hr/>

                <div id="loginArea">
                    <img className="centerElement" src={Superheroes} alt="React Redux Logo"/>

                        <form action="" onSubmit={this.handleSubmit}  >
                            <label>Sign In
                                <select className="centerElement" name="users" id="userslist" aria-placeholder="Select User" value={this.state.value} onChange={this.handleChange}>
                                    <option className="optionColor" value="" hidden defaultValue='selected'>Select User</option>
                                    <option value="Avengers">Avengers</option>
                                    <option value="Deadpool">Deadpool</option>
                                    <option value="Britta">Britta</option>
                                </select>
                                <button className="centerElement" type="submit">Sign In</button>
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
        users
    }
}

export default connect(mapStateToProps)(Login)
