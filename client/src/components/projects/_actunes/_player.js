import React from "react";
import Search from "./WeatherForm";

import sunny from "../../../assets/images/AC_App/weather-normal.svg";
import raining from "../../../assets/images/AC_App/weather-raining.svg";
import winter from "../../../assets/images/AC_App/weather-winter.svg";

const Player = ({ props, state, loadSong, loadWeather, handleChange }) => {
  if (state.hasStarted) {
    let time = props.time.hours + "00";
    if (props.time.period === "PM" && new Date().getHours() > 12) {
      time = parseInt(props.time.hours) + 12 + "00";
    } else {
      time = props.time.hours + "00";
    }

    return [
      <div className="clock" key="time">
        <img src={`/images/AC_App/Timeline/(${time}).png`} alt="Clock" />
        <div className="clock_time">
          <i>{props.time.hours}</i>
          <i>:{props.time.minutes}</i>
        </div>
        {/* <select className="clock_weather" key="weatherDials">
          <option value="Raining">
            <img
              onClick={() => loadSong(state.setAlbum, "Raining")}
              className="weatherIcon"
              alt="Change Weather to Rain Theme"
              src={raining}
            />
          </option>
          <option value="Winter">
            <img
              onClick={() => loadSong(state.setAlbum, "Winter")}
              className="weatherIcon"
              alt="Change Weather to Winter Theme"
              src={winter}
            />
          </option>
          <option value="Normal">
            <img
              onClick={() => loadSong(state.setAlbum, "Normal")}
              className="weatherIcon"
              alt="Change Weather to Normal Theme"
              src={sunny}
            />
          </option>
        </select> */}
      </div>,
      <h4 key="Song Title">
        {state.setAlbum}, {state.title}, {state.weather}
      </h4>,
      <audio controls loop autoPlay id="player" key="player">
        <source src={state.song} type="audio/mp3" className="audioSource" />
        Your browser does not support the audio element.
      </audio>,
      <div key="songDials" className="timeline">
        <button className="timeline-item" onClick={() => loadSong("Original")}>
          Orignal
        </button>
        <button className="timeline-item" onClick={() => loadSong("CityFolk")}>
          City Folk
        </button>
        <button className="timeline-item" onClick={() => loadSong("NewLeaf")}>
          NewLeaf
        </button>
      </div>,
      <div>
        <img
          onClick={() => loadSong(state.setAlbum, "Raining")}
          className="weatherIcon"
          alt="Change Weather to Rain Theme"
          src={raining}
        />

        <img
          onClick={() => loadSong(state.setAlbum, "Winter")}
          className="weatherIcon"
          alt="Change Weather to Winter Theme"
          src={winter}
        />

        <img
          onClick={() => loadSong(state.setAlbum, "Normal")}
          className="weatherIcon"
          alt="Change Weather to Normal Theme"
          src={sunny}
        />
      </div>,

      <Search
        key="WeatherForm"
        props={state}
        handleChange={handleChange}
        loadWeather={loadWeather}
      />
    ];
  } else {
    return <button onClick={() => loadSong()}>Start</button>;
  }
};

export default Player;
