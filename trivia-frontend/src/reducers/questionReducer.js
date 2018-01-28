export default function reducer(state={

    question: "",
    timer: 10,
    answers: ["","",""],
    correct: -1,
    revealed: false

}, action){

    switch(action.type){
        case "QUESTION_ADDED": {
            return {
                ...state,
                question: action.payload.question,
                timer: action.payload.timer,
                answers: action.payload.answers,
                correct: action.payload.correct
            };
        };

        case "QUESTION_ANSWERED": {
            return state;// this does nothing, should sent a rest call to our api, or socketed
        };


        default: return state;
    }
}