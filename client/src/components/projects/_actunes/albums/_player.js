import React, { Component } from "react";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      hasStarted: false,
      weather: "Normal",
      weatherData: {},
      weatherKey: "c818f18fb44cfccea6436940f6cea5f8",
      song: ""
    };
    this.loadSong = this.loadSong.bind(this);
    this.loadWeather = this.loadWeather.bind(this);
  }

  loadWeather(location = "Hessen", unit = "metric") {
    const key = "c818f18fb44cfccea6436940f6cea5f8";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${key}`;
    let updated = console.log("weather updated to: ", this.state.weather);
    try {
      fetch(url)
        .then(res => res.json())
        .then(res => this.setState({ weatherData: res }))
        .then(res => {
          let { weatherData } = this.state;
          let message = `it is currently ${weatherData.main.temp} celcius in ${
            weatherData.name
          }`;
          console.log(weatherData);

          switch (weatherData.weather.main) {
            case "Rain":
              return this.setState({ weather: "Rain" });
            case "Snow":
              return this.setState({ weather: "Winter" });
            default:
              return this.setState({ weather: "Normal" });
          }
          // eslint-disable-next-line
          updated();
          alert(message);
        });
    } catch (err) {
      alert(err, "Please try again...");
    }
  }

  loadSong(playlist, weather = this.state.weather) {
    let { hours, period } = this.props.time;
    let { audioData } = this.props;
    let title =
      hours < 10 && hours.indexOf("0") > -1
        ? hours.replace("0", "") + period
        : hours + period;
    if (title === "12PM") {
      title = "Noon";
    } else if (hours === "00") {
      title = "Midnight";
    }

    const defaultSong = () => {
      try {
        this.setState({
          song: audioData.Original[this.state.weather][title],
          hasStarted: true
        });
      } catch (err) {
        alert(err.message);
      }
    };
    const setSong = () => {
      this.setState({
        song: audioData[playlist][this.state.weather][title]
      });
      // console.log("Song Set", this.state.song);
      document.getElementById("player").load();
    };

    if (playlist === undefined && !this.state.hasStarted) {
      defaultSong();
    } else if (playlist !== undefined) {
      setSong();
    }
  }

  componentDidMount() {
    this.loadWeather();
  }

  renderContent() {
    // this.loadSong();
    let audio;

    if (this.state.hasStarted) {
      audio = [
        <audio controls loop autoPlay id="player" key="player">
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
      audio = <button onClick={() => this.loadSong()}>Start</button>;
    }

    switch (this.props.time.isloaded) {
      case null:
        return;
      case true:
        return <div className="Player">{audio}</div>;

      default:
        return "Loading Audio...";
    }
  }

  render() {
    return this.renderContent();
  }
}

export default Player;
