import { SET_QUESTION_ID } from "../constants/constants.js";

export function setQuestionId(id){
    return {
        type: SET_QUESTION_ID,
        id,
    }
}