import React, { Component } from "react";
import Audio from "./Audio";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      period: new Date().getHours() < 12 ? "AM" : "PM",
      isloaded: false,
      date: new Date(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds()
    };
    this.timer = this.timer.bind(this);
  }

  timer() {
    setInterval(() => {
      const prepend = value => (value = value < 10 ? `0${value}` : value);
      let { hours, minutes, seconds, period, isloaded } = this.state;
      let date = new Date();
      let prevHour = this.state.date.getHours();
      let currentMinute = date.getMinutes().toString();
      let currentSecond = date.getSeconds().toString();

      let currentHour =
        date.getHours() > 12
          ? (date.getHours() - 12).toString()
          : date.getHours().toString();

      if (hours !== currentHour) {
        this.setState({ hours: prepend(currentHour) });
      }
      if (minutes !== currentMinute) {
        this.setState({ minutes: prepend(currentMinute) });
      }
      if (seconds !== currentSecond) {
        this.setState({ seconds: prepend(currentSecond) });
      }
      if (prevHour > 11) {
        this.setState({ period: "PM" });
      } else if (prevHour < 11 && period !== "AM") {
        this.setState({ period: "AM" });
      }
      if (!isloaded) {
        this.setState({ isloaded: true });
      }
    }, 1000);
  }

  componentDidMount() {
    this.timer();
  }

  renderContent() {
    return (
      <main>
        <Audio
          key="musicPlayer"
          audioData={this.props.audioData}
          videoData={this.props.videoData}
          time={this.state}
        />
      </main>
    );
  }

  render() {
    return this.renderContent();
  }
}

export default Clock;
