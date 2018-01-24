import './Streamer.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';

export default class Streamer extends Component {


    constructor(props){
        super(props);
        this.state = {
            timer: 10,
            question: "",
            answers: ["","",""],
            correct: -1
        }
    }

    ask(){
        console.log(this.state);
        this.props.onAsk(this.state);
        /* code to post the question to the server
        to distribute to viewers */
    }

    render() {
        return (
            <div>
                 <div className="question-box">
                    <label className="creator-input-label creator-input-label--timer" htmlFor="timer" > Timer </label>
                    <input name="timer" className="question-timer creator-input--timer" maxLength="2" defaultValue={this.state.timer} onChange={(event) => this.setState({timer: event.target.value})}/>
                    <label className="creator-input-label creator-input-label--question" htmlFor="question"> Question </label>
                    <textarea name="question" rows="3" className="creator-input creator-input--question" placeholder="Enter your trivia question here..." onChange={(event) => this.setState({question: event.target.value})}></textarea>
                
                    <div className="question-answers ">
                        <label className="creator-input-label creator-input-label--answer" htmlFor="question"> Answers </label>
                    
                        <div className="input-radio-wrapper creator-input-radios">
                            <input className="question-answers-item creator-input creator-input--answer" placeholder="Enter answer here..." onChange={(event) => {let newVal = event.target.value; this.setState( (prevState) => ({answers: [newVal, prevState.answers[1], prevState.answers[2]]}))}}/> 
                            <div className="creator-input-radio">
                                <input id="answer1"  type="radio" value="1" name="correct" onChange={(event) => this.setState({correct: event.target.value})}/>
                                <label htmlFor="answer1"><i className="fa fa-check fa-lg white"></i></label>
                            </div>
                        </div>
                        
                        <div className="input-radio-wrapper creator-input-radios">
                            <input className="question-answers-item creator-input creator-input--answer" placeholder="Enter answer here..." onChange={(event) => {let newVal = event.target.value; this.setState( (prevState) => ({answers: [prevState.answers[0], newVal, prevState.answers[2]]}))}}/> 
                            <div className="creator-input-radio">
                                <input id="answer2"  type="radio" value="2" name="correct" onChange={(event) => this.setState({correct: event.target.value})}/>
                                <label htmlFor="answer2"><i className="fa fa-check fa-lg white"></i></label>
                            </div>
                        </div>
                        
                        <div className="input-radio-wrapper creator-input-radios">
                            <input className="question-answers-item creator-input creator-input--answer" placeholder="Enter answer here..." onChange={(event) => {let newVal = event.target.value; this.setState( (prevState) => ({answers: [prevState.answers[0], prevState.answers[1], newVal]}))}}/> 
                            <div className="creator-input-radio">
                                <input id="answer3"  type="radio" value="3" name="correct" onChange={(event) => this.setState({correct: event.target.value})}/>
                                <label htmlFor="answer3"><i className="fa fa-check fa-lg white"></i></label>
                            </div>
                        </div>
                    
                    </div>
                
                <button className="creator-input--submit" onClick={this.ask.bind(this)}>Ask!</button>
                </div>
            </div>
        );
    }
}