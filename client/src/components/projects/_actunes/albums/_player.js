import React, { Component } from "react";

import AudioComponent from "./AudioComponent";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasStarted: false,
      weather: "",
      weatherData: {},
      weatherKey: "c818f18fb44cfccea6436940f6cea5f8",
      setAlbum: "",
      location: "",
      unit: "metric",
      song: "",
      title: ""
    };
    this.loadSong = this.loadSong.bind(this);
    this.loadWeather = this.loadWeather.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  loadSong(playlist = this.state.setAlbum, weather = this.state.weather) {
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
        weather = "Normal";
        this.setState({
          song: audioData.Original[weather][title],
          title: title,
          weather: weather,
          setAlbum: "Original",
          hasStarted: true
        });
      } catch (err) {
        alert(err.message);
      }
    };
    const setSong = () => {
      this.setState({
        song: audioData[playlist][weather][title],
        title: title,
        weather: weather,
        setAlbum: playlist
      });
      document.getElementById("player").load();
    };

    if (playlist === "" && !this.state.hasStarted) {
      defaultSong();
    } else if (playlist !== "") {
      setSong();
    }
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  loadWeather(event) {
    event.preventDefault();

    try {
      let { weatherKey, location, unit } = this.state;
      let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${weatherKey}`;

      if (location === "") {
        location = "portland";
      }
      fetch(apiUrl)
        .then(res => res.json())
        .then(res => this.setState({ weatherData: res }))
        .then(res => {
          try {
            let { weatherData, setAlbum } = this.state;

            switch (weatherData.weather.main) {
              case "Rain":
                return this.loadSong(setAlbum, "Raining");
              case "Snow":
                return this.loadSong(setAlbum, "Winter");
              default:
                return this.loadSong(setAlbum, "Normal");
            }
          } catch (err) {
            alert("City Not Found, Please try again...");
          }
        });
    } catch (err) {
      alert(err.message);
    }
  }

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
