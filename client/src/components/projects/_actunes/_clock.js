import React, { Component } from "react";
import Player from "./albums/_player";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      hours: "00",
      minutes: "00",
      seconds: "00"
    };
    this.timer = this.timer.bind(this);
  }

  timer() {
    setInterval(() => {
      const prepend = value => (value = value < 10 ? `0${value}` : value);
      let date = new Date();
      let currentMinute = date.getMinutes().toString();
      let currentSecond = date.getSeconds().toString();

      let currentHour =
        date.getHours() > 12
          ? (date.getHours() - 12).toString()
          : date.getHours().toString();

      if (this.state.hours !== currentHour) {
        this.setState({ hours: prepend(currentHour) });
      }
      if (this.state.minutes !== currentMinute) {
        this.setState({ minutes: prepend(currentMinute) });
      }
      if (this.state.seconds !== currentSecond) {
        this.setState({ seconds: prepend(currentSecond) });
      }
    }, 1000);
  }

  componentDidMount() {
    this.timer();
  }
  renderContent() {
    return [
      <Player
        audioData={this.props.audioData}
        videoData={this.props.videoData}
        time={this.state}
      />,
      <div>
        <i>{this.state.hours}</i>
        <i>:{this.state.minutes}</i>
        <i>:{this.state.seconds}</i>
      </div>
    ];
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Clock;
