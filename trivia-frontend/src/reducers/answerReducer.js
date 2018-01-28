export default function reducer(state={
    correct: -1,
    answers: [0,0,0],
    revealed: false
}, action){

    switch(action.type){

        case "ANSWER_REVEALED": {
            return{
                ...state,
                correct: action.payload.correct,
                answers: action.payload.answers,
                revealed: true //this is mostly for the testing
            };
        };

        default: return state;
    }
}