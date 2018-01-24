export default function reducer(state={
    triviaQuestion: {
        question: "",
        timer: 10,
        answers: ["","",""],
        correct: -1
    }
}, action){
    console.log(action);
    switch(action.type){
        case "QUESTION_ADDED": {
            return {
                ...state,
                triviaQuestion: {
                    question: action.payload.question,
                    timer: action.payload.timer,
                    answers: action.payload.answers,
                    correct: action.payload.correct
                }
            };
        }
        default: return state;
    }
}