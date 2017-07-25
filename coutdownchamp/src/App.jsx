import React, {Component} from 'react';
import Clock from './Clock'
import Timer from './Timer'
import './App.css'
import {Form, FormControl, Button} from 'react-bootstrap'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deadLine: 'December 25, 2017',
            newDeadline: '',
            timer: 1000,
            newTimer: ''
        }
    }

    changeDeadLine() {
        this.setState({deadLine: this.state.newDeadline});
    }

    changeTimer() {
        this.setState({timer: this.state.newTimer});
    }

    render() {
        return (
            <div className='App'>
                <div className="App-title">
                    Coutdown to {this.state.deadLine}
                </div>
                <Clock deadLine={this.state.deadLine}/>
                <Form inline>
                    <FormControl
                        className="DeadLine-input"
                        onChange={event => this.setState({newDeadline: event.target.value})}
                        placeholder='new date'/>
                    <Button onClick={() => this.changeDeadLine()}>
                        Submit
                    </Button>
                </Form>

                <Timer timer={this.state.timer}/>

                <Form inline>
                    <FormControl
                        className='DeadLine-input'
                        onChange={event => this.setState({newTimer: event.target.value})}
                        placeholder='new value'/>
                    <Button onClick={() => this.changeTimer()}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default App;