import { getInitialData } from "../utils/api";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";
import { setAuthedUser } from "../actions/authedUser";
import { setQuestionId } from "./questionId";

const AUTHED_ID = ''
const QUESTION_ID = ''


export function handleInitialData() {
    return(dispatch) =>{
        return getInitialData()
        .then(({users,questions})=> {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(AUTHED_ID))
            dispatch(setQuestionId(QUESTION_ID))
        })
    }
}
