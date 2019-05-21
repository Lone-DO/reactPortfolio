import React, { Component } from "react";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      hasStarted: false,
      weather: "Normal",
      song: ""
    };
    this.loadSong = this.loadSong.bind(this);
  }

  loadSong(playlist) {
    let { hours, period } = this.props.time;
    let { audioData } = this.props;
    let title =
      hours < 10 && hours.indexOf("0") > -1
        ? hours.replace("0", "") + period
        : hours + period;

    if (playlist === undefined && !this.state.hasStarted) {
      this.setState({
        hasStarted: true,
        song: audioData.Original[this.state.weather][title]
      });
    } else if (playlist !== undefined) {
      this.setState({
        song: audioData[playlist][this.state.weather][title]
      });
    }

    document.getElementById("player").load();
  }

  componentDidMount() {}
  renderContent() {
    if (this.props.time.isloaded) {
      return [
        <audio
          controls
          loop
          autoPlay
          id="player"
          className="player"
          key="player"
        >
          <source
            src={this.state.song}
            type="audio/mp3"
            className="audioSource"
          />
          Your browser does not support the audio element.
        </audio>,
        <div key="songDials">
          <p>{this.state.song}</p>
          <button onClick={() => this.loadSong("Original")}>Orignal</button>
          <button onClick={() => this.loadSong("CityFolk")}>City Folk</button>
          <button onClick={() => this.loadSong("NewLeaf")}>NewLeaf</button>
        </div>
      ];
    } else {
      return "Loading Audio...";
    }
  }

  render() {
    return this.renderContent();
  }
}

export default Player;
