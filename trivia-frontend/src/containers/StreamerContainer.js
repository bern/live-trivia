import { connect } from 'react-redux';
import { askQuestion } from '../actions/questionActions';
import Streamer from '../components/Streamer/Streamer';


const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAsk: triviaQuestion => {
      dispatch(askQuestion(triviaQuestion))
    }
  }
}

const StreamerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Streamer);

export default StreamerContainer