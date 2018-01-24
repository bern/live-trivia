import { connect } from 'react-redux';
import { askQuestion } from '../actions/questionActions';
import Viewer from '../components/Viewer/Viewer';


const mapStateToProps = state => {
  return {
    timer: state.triviaQuestion.timer,
    question: state.triviaQuestion.question,
    answers: state.triviaQuestion.answers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAsk: id => {
      dispatch(askQuestion(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewer)

export default ViewerContainer