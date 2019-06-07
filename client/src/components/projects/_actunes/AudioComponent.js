import React from "react";
import WeatherForm from "./WeatherForm";

import sunny from "../../../assets/images/AC_App/weather-normal.svg";
import raining from "../../../assets/images/AC_App/weather-raining.svg";
import winter from "../../../assets/images/AC_App/weather-winter.svg";

const AudioComponent = ({ props, loadSong, loadWeather, handleChange }) => {
  if (props.hasStarted) {
    return [
      <h4 key="Song Title">
        {props.setAlbum}, {props.title}, {props.weather}
      </h4>,
      <audio controls loop autoPlay id="player" key="player">
        <source src={props.song} type="audio/mp3" className="audioSource" />
        Your browser does not support the audio element.
      </audio>,
      <div key="songDials">
        <button onClick={() => loadSong("Original")}>Orignal</button>
        <button onClick={() => loadSong("CityFolk")}>City Folk</button>
        <button onClick={() => loadSong("NewLeaf")}>NewLeaf</button>
        <br />

        <img
          onClick={() => loadSong(props.setAlbum, "Raining")}
          className="weatherIcon"
          alt="Change Weather to Rain Theme"
          src={raining}
        />

        <img
          onClick={() => loadSong(props.setAlbum, "Winter")}
          className="weatherIcon"
          alt="Change Weather to Winter Theme"
          src={winter}
        />

        <img
          onClick={() => loadSong(props.setAlbum, "Normal")}
          className="weatherIcon"
          alt="Change Weather to Normal Theme"
          src={sunny}
        />
      </div>,
      <WeatherForm
        key="WeatherForm"
        props={props}
        handleChange={handleChange}
        loadWeather={loadWeather}
      />
    ];
  } else {
    return <button onClick={() => loadSong()}>Start</button>;
  }
};

export default AudioComponent;
