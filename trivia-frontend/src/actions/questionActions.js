export function askQuestion(questionObject){
    return{
        type: "QUESTION_ADDED",
        payload: questionObject
    };
}