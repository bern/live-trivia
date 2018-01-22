import './Streamer.css';
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
        /* code to post the question to the server
        to distribute to viewers */
    }

    render() {
        return (
            <div>
                 <div className="question-box">
                    <label className="creator-input-label creator-input-label--timer" htmlFor="timer" > Timer </label>
                    <input name="timer" className="question-timer creator-input--timer" maxLength="2" defaultValue={this.state.timer} onChange={(value) => console.log(value)}/>
                    <label className="creator-input-label creator-input-label--question" htmlFor="question"> Question </label>
                    <textarea name="question" rows="3" className="question-text creator-input creator-input--question" placeholder="Enter your trivia question here..." ></textarea>
                
                    <div className="question-answers ">
                        <label className="creator-input-label creator-input-label--answer" htmlFor="question"> Answers </label>
                    
                        <div className="input-radio-wrapper creator-input-radios">
                            <input className="question-answers-item creator-input creator-input--answer" placeholder="Enter answer here..."/> 
                            <div className="creator-input-radio">
                                <input id="answer1"  type="radio" value="1" name="correct" />
                                <label htmlFor="answer1"><i className="fa fa-check fa-lg white"></i></label>
                            </div>
                        </div>
                        
                        <div className="input-radio-wrapper creator-input-radios">
                            <input className="question-answers-item creator-input creator-input--answer" placeholder="Enter answer here..."/> 
                            <div className="creator-input-radio">
                                <input id="answer2"  type="radio" value="2" name="correct" />
                                <label htmlFor="answer2"><i className="fa fa-check fa-lg white"></i></label>
                            </div>
                        </div>
                        
                        <div className="input-radio-wrapper creator-input-radios">
                            <input className="question-answers-item creator-input creator-input--answer" placeholder="Enter answer here..."/> 
                            <div className="creator-input-radio">
                                <input id="answer3"  type="radio" value="3" name="correct" />
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