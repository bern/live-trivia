import { connect } from 'react-redux';
import { answerQuestion } from '../actions/questionActions';
import Viewer from '../components/Viewer/Viewer';


const mapStateToProps = state => {
  return {
    timer: state.question.timer,
    question: state.question.question,
    answers: state.question.answers,
    correct: state.answer.correct,
    revealed: state.answer.revealed
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAnswer: answer => {
      dispatch(answerQuestion(answer))
    }
  };
}

const ViewerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewer);

export default ViewerContainer