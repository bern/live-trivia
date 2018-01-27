import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import {connect} from 'react-redux';
import store, { history } from '../../store';
import Streamer from '../Streamer/Streamer';
import StreamerContainer from '../../containers/StreamerContainer';
import Viewer from '../Viewer/Viewer';
import simulatedapi from '../../simulatedAsk';
import ViewerContainer from '../../containers/ViewerContainer';

const App = (props) => (
  <ConnectedRouter history={history}>
    <div className="App">
      <Link to="/streamer">streamer component</Link>
      <br/>
      <Link to="/viewer"> viewer component</Link>

      <Route path="/streamer" component={StreamerContainer}/>
      <Route path="/viewer" render={(props) => (<ViewerContainer/>)}/>

    </div>
  </ConnectedRouter>
);


export default App;
