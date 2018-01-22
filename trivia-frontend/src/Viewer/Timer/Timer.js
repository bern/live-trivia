import './Timer.css';
import React, { Component } from 'react';

export default class Answer extends Component {

    constructor(props){
        super(props);
        this.state = {
            time: props.time,
            expired: false,
            counter: null
        };
    }

    componentDidMount(){
        this.setState({
            counter: setInterval(() => {
                if(this.state.time > 0) this.setState({time: --this.state.time});
                else this.timeUp();
            },1000)
        });
    }

    timeUp(){
        this.props.timeUp();
        clearInterval(this.state.counter);
        this.setState({
            time: "Times Up!", //this is haram because time was an int, javascript sweg
            expired: true
        });
    }


    render() {
        return (
            <div>
                <div className={"question-timer " + (this.state.expired ? "question-timer--expired" : "")}>{this.state.time}</div>
            </div>
        );
    }
}