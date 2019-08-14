import { RECEIVE_QUESTIONS, SAVE_ANSWER } from '../constants/constants.js'

export default function questions (state={}, action){
    switch (action.type) {

        case RECEIVE_QUESTIONS:
        return {
            ...state,
            ...action.questions
        }

        case SAVE_ANSWER:
        return {
            ...state,         
            
            // [action.authedUser]: {
            //     ...[action.authedUser],
            //     answers: {
            //         ...[action.authedUser].answers,
            //         [action.qid] : action.answer
            //     }
            // },

            [action.qid]: {
                ...state[action.qid],
                    [action.answer]: {
                    ...state[action.qid][action.answer],
                        votes: [
                            ...state[action.qid][action.answer].votes.concat([action.authedUser])
                        ]
                }
            }
            
        }

    default:
        return state    
    }
}