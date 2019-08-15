import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_ANSWER } from '../constants/constants.js';
import { saveQuestionAnswer} from '../utils/api.js';
import { saveQuestion } from '../utils/api.js';


function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question
    }
}

export function handleSaveQuestion(optionOne, optionTwo){
    return(dispatch , getState) => {
        const {authedUser} = getState()

        saveQuestion({
            optionOne,
            optionTwo,
            author: authedUser,
        })
        .then((question) => dispatch(addQuestion(question)))
    }
}


function saveAnswer({authedUser, qid, answer}){
    return{
        type: SAVE_ANSWER,
        qid,
        authedUser,
        answer,
    }
}

export function handleSaveQuestionAnswer(answer) {
    return(dispatch , getState) => {
        const { authedUser , qid } = getState()
        
        saveQuestionAnswer(answer,qid,authedUser)
        .then(()=> {
            dispatch(saveAnswer(answer));
        })
        .catch((e)=> {
            console.warn('Error: ', e)
            alert('There was an error saving the question. Please try again' )
        })
    }
}


export function receiveQuestions (questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}