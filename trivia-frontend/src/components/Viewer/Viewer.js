import './Viewer.css';
import React, { Component } from 'react';
import Answer from './Answer/Answer';
import Timer from './Timer/Timer';

export default class Client extends Component {

    constructor(){
        super();
        this.state = {
            readOnly: false
        };
    }

    onAnswer(answer){//answer will be index of chosen answer 0-2
        this.setState({
            readOnly: true
        });
        console.log("user chose answer with index of: ", answer);
    }

    timeUp(){
        this.setState({
            readOnly: true
        });
        console.log("time is up!");
    }

    render() {
        let answers = this.props.answers.map( (answer, index) => {
            return <Answer key={index} index={index} answer={answer} readOnly={this.state.readOnly} onAnswer={this.onAnswer.bind(this)}></Answer>
        });

        return (
            <div>
                <div className="question-box">
                    <Timer time={this.props.timer} timeUp={this.timeUp.bind(this)}></Timer>
                    <div className="question-text">{this.props.question}</div>
                    <div className="question-answers">
                        {answers}
                    </div>
                </div>
            </div>
        );
    }
}