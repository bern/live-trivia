export function askQuestion(questionObject){
    return{
        type: "QUESTION_ADDED",
        payload: questionObject
    };
}

export function answerQuestion(answerIndex){
    return{
        type: "QUESTION_ANSWERED",
        payload: answerIndex
    };
}
