import { RECEIVE_USERS } from '../constants/constants.js'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}