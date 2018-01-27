import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { askQuestion } from '../actions/questionActions';
import { push } from 'react-router-redux';
import Streamer from '../components/Streamer/Streamer';


const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAsk: triviaQuestion => {
      dispatch(askQuestion(triviaQuestion))
    },
    changePage: () => {
        dispatch(push('/viewer'));
    }
  };
}

const StreamerContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Streamer));

export default StreamerContainer