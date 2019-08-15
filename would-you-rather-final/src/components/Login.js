import React, {Component} from 'react';
import { connect } from 'react-redux';

class Login extends Component{
    render(){
        return(
            <div> 
                <div>
                    <h2>Welcome to the Would You Rather App!</h2>
                    <h3>Please sign in to continue</h3>
                </div>
                <hr/>
                    <div>
                        <img className="centerElement" src="letsgo.jpg" alt="React Redux Logo"/>
                            <h1>Sign In</h1>
                            <form action=""  >
                                <select className="centerElement" name="users" id="userslist" aria-placeholder="Select User">
                                    <option className="optionColor" value="" hidden defaultValue='selected'>Select User</option>
                                    <option value="Bob">Avengers</option>
                                    <option value="Babsy">Deadpool</option>
                                    <option value="Britta">Britta</option>
                                </select>
                                <button className="centerElement" type="submit">Sign In</button>
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
