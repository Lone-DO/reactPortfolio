import React, { Component } from "react";

// let date = new Date();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();

//Adds 0 on front to avoid single digit time

// if (hours < 10) {
//   hours = `0${hours}AM`;
// } else if (hours > 12) {
//   hours = `${hours - 12}PM`;
// }
// if (minutes < 10) {
//   minutes = "0" + minutes;
// }
// if (seconds < 10) {
//   seconds = "0" + seconds;
// }

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      hour: this.state.date.getHours(),
      minute: this.state.date.getMinutes(),
      second: this.state.date.getSeconds()
    };
  }
}

export default Timer;
