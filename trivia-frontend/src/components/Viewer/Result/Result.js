import './Result.css';
import React, { Component } from 'react';

export default class Result extends Component {

    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.total);
        return (
            <div>
                <div className="question-answers-item-wrapper ">
                    <div className="result-number">{this.props.count}</div>
                    <div className={"question-answers-item " + (this.props.index == this.props.correct ? "question-answers-item--correct " : " ")} style={{width: (18 * this.props.count / this.props.total) + "rem"}}>{this.props.answer}</div>
                </div>
            </div>
        );
    }
}