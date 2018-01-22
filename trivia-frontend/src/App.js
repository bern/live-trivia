import './App.css';
import React, { Component } from 'react';
import Streamer from './Streamer/Streamer';
import Viewer from './Viewer/Viewer';
import simulatedapi from './simulatedAsk'

class App extends Component {

  componentWillMount(){
    console.log(simulatedapi);
  }

  render() {
    return (
      <div className="App">
        <br/>
        <Streamer></Streamer>
        <br/>
        <Viewer timer={simulatedapi.timer} question={simulatedapi.question} answers={simulatedapi.answers}></Viewer>
      </div>
    );
  }
}

export default App;
