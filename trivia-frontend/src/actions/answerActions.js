
export function answerRevealed(correctAnswerIndex, ...answerCounts){
    return{
        type: "ANSWER_REVEALED",
        payload: {revealed: true, correct: correctAnswerIndex, answers: answerCounts}
    };
}