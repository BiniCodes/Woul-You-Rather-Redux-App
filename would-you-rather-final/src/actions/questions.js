import { RECEIVE_QUESTIONS } from '../constants/constants.js'

export function receiveQuestions (questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}