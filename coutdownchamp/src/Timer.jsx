import React, { Component } from 'react';
import './App.css'

export default class Timer extends Component {
    constructor(props){
        super(props)

        this.state = {
            timer: 0,
            newTimer: 0,
            test: 0
        }
    }

    componentDidMount () {
        setInterval(() =>{
           this.getTimeToFinish(this.props.timer);
        }, 1000);
    }

    componentWillMount() {
        this.getTimeToFinish(this.props.timer);
    }

    getTimeToFinish(timer) {
        
    }

    render() {
        return(
            <div>
                To finish: {this.state.timer}
            </div>
        );
    }
}