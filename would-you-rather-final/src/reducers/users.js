import { RECEIVE_USERS , ADD_QUESTION, SAVE_ANSWER } from '../constants/constants.js'

export default function users (state={}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
        const { question } = action

            return{
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat([
                        question.id
                    ])
                }
            }
        case SAVE_ANSWER:
            return{
                ...state,
                [action.autheduser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default:
            return state
    }
}