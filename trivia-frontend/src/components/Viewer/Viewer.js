import './Viewer.css';
import React, { Component } from 'react';
import Answer from './Answer/Answer';
import Timer from './Timer/Timer';
import Result from './Result/Result';

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
        this.props.answerRevealed(2, [200,132,83]); //pretty unsure about how we want to work this
        console.log("time is up!");
    }

    render() {
        let answers = this.props.answers.map( (answer, index) => {
            return <Answer key={index} index={index} answer={answer} readOnly={this.state.readOnly} onAnswer={this.onAnswer.bind(this)}></Answer>
        });
        console.log(this.props.counts);
        let total = this.props.counts.reduce((sum, num) => sum + num);
        console.log(total);
        let results = this.props.answers.map( (answer, index) => {
            return <Result key={index} index={index} answer={answer} correct={this.props.correct} count={this.props.counts[index]} total={total}></Result>
        });

        return (
            <div>
                <div className="question-box">
                    <Timer time={this.props.timer} timeUp={this.timeUp.bind(this)}></Timer>
                    <div className="question-text">{this.props.question}</div>
                    <div className="question-answers">
                        {!this.props.revealed ? answers : results}
                    </div>
                </div>
            </div>
        );
    }
}