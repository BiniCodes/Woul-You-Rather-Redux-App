import { combineReducers } from 'redux';
import authedUser from './authedUser.js'

export default combineReducers({
    authedUser:authedUser
});