import { SET_AUTHED_USER } from "../constants/constants.js";

export function setAuthedUser(id){
    return {
        type: SET_AUTHED_USER,
        id,
    }
}