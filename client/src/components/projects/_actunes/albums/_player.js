import React, { Component } from "react";

import AudioComponent from "./AudioComponent";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasStarted: false,
      weather: "Normal",
      weatherData: {},
      weatherKey: "c818f18fb44cfccea6436940f6cea5f8",
      location: "",
      unit: "metric",
      song: ""
    };
    this.loadSong = this.loadSong.bind(this);
    this.loadWeather = this.loadWeather.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadWeather(event) {
    event.preventDefault();
    let { weatherKey, location, unit } = this.state;
    if (location === "") {
      location = "portland";
    }
    console.log(location);
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${weatherKey}`;
    let updated = console.log("weather updated to: ", this.state.weather);
    try {
      fetch(apiUrl)
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

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.loadWeather();
  }

  // componentDidMount() {}

  renderContent() {
    switch (this.props.time.isloaded) {
      case null:
        return;
      case true:
        return (
          <div className="Player">
            <AudioComponent
              props={this.state}
              loadSong={this.loadSong}
              loadWeather={this.loadWeather}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        );

      default:
        return "Loading Audio...";
    }
  }

  render() {
    return this.renderContent();
  }
}

export default Player;
