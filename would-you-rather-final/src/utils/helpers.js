export function formatQuestion(question, author, authedUser){
    const { id, timestamp, optionOne, optionTwo } = question
    const {name , avatarURL} = author

    if(question === undefined){
        alert("This question does not exist.")
    } else {
        return {
            name,
            avatar: avatarURL,
            questionId: id,
            timestamp,
            textOne: optionOne.text,
            textTwo: optionTwo.text,
            choseOptionOne: optionOne.votes.includes(authedUser),
            choseOptionTwo: optionTwo.votes.includes(authedUser),

        }

    }
}


