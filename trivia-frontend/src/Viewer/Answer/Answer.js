import './Answer.css';
import React, { Component } from 'react';

export default class Answer extends Component {

    constructor(props){
        super(props);
        this.state = {
            chosen: false,
            answered: false
        };
    }

    answer(){
        if(!this.props.readOnly){ //if the question has not yet been answered / time has not expired
            this.props.onAnswer(this.props.index);
            this.setState({
                chosen: true
            });
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className={"question-answers-item-wrapper " + (!this.props.readOnly ? "question-answers-item-wrapper--unanswered " : " ") + (this.state.chosen ? " question-answers-item-wrapper--chosen" : " ") } onClick={this.answer.bind(this)}>
                    <div className="result-number"></div>
                    <div className="question-answers-item" >{this.props.answer}</div>
                </div>
            </div>
        );
    }
}