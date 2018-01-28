import { connect } from 'react-redux';
import { answerQuestion } from '../actions/questionActions';
import { answerRevealed } from '../actions/answerActions';
import Viewer from '../components/Viewer/Viewer';


const mapStateToProps = state => {
  return {
    timer: state.question.timer,
    question: state.question.question,
    answers: state.question.answers,
    correct: state.answer.correct,
    revealed: state.answer.revealed,
    counts: state.answer.answers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAnswer: answer => {
      dispatch(answerQuestion(answer));
    },
    answerRevealed: (correctIndex, answerCounts) => {
      dispatch(answerRevealed(correctIndex, answerCounts));
    }
  };
}

const ViewerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewer);

export default ViewerContainer