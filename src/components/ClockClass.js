import React, { Component } from 'react'

export default class ClockClass extends Component {
    constructor(props){
        super(props);
        this.state ={ date: new Date()}

    }
    
    componentDidMount(){
        this.timerID = setInterval(()=> this.tick(),1000)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div className="App">
                <h2>this is {this.state.date.toLocaleTimeString()} class</h2>
            </div>
        )
    }
}
