import React, { Component } from 'react';
import './StopWatch.css';

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      stopped: false,
      stopLabel: "Stop"
    };

    this.toggleStopped = this.toggleStopped.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      // After one second, if the state is not stopped, update the time
      if (!this.state.stopped) {
        this.setState({
          time: this.state.time + 1
        });
      }
    }, 1000)
  }

  toggleStopped() {
    const stopLabel = this.state.stopped ? "Stop" : "Start";
    this.setState({
      stopped: !this.state.stopped,
      stopLabel: stopLabel
    });
  }

  resetTimer() {
    this.setState({time: 0});
  }

  render() {
    return (
      <div className="stop-watch">
        <div className="time-display">{this.state.time}</div>
        <button className="stop-button" data-stopped={this.state.stopped} onClick={this.toggleStopped}>{this.state.stopLabel}</button>
        <button className="reset-button" onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
