import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Streamer from '../Streamer/Streamer';
import StreamerContainer from '../../containers/StreamerContainer';
import Viewer from '../Viewer/Viewer';
import simulatedapi from '../../simulatedAsk'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/streamer">streamer component</Link>
          <br/>
          <Link to="/viewer"> viewer component</Link>

          <Route path="/streamer" component={StreamerContainer}/>

          <Route path="/viewer" render={(props) => (<Viewer timer={simulatedapi.timer} question={simulatedapi.question} answers={simulatedapi.answers}/>)}/>

          
        </div>
      </Router>
    );
  }
}

export default App;
