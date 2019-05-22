import React from "react";
import WeatherForm from "./WeatherForm";
const AudioComponent = ({
  props,
  loadSong,
  loadWeather,
  handleChange,
  handleSubmit
}) => {
  if (props.hasStarted) {
    return [
      <audio controls loop autoPlay id="player" key="player">
        <source src={props.song} type="audio/mp3" className="audioSource" />
        Your browser does not support the audio element.
      </audio>,
      <div key="songDials">
        <p>{props.song}</p>
        <button onClick={() => loadSong("Original")}>Orignal</button>
        <button onClick={() => loadSong("CityFolk")}>City Folk</button>
        <button onClick={() => loadSong("NewLeaf")}>NewLeaf</button>
      </div>,
      <WeatherForm
        key="WeatherForm"
        props={props}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loadWeather={loadWeather}
      />
    ];
  } else {
    return <button onClick={() => loadSong()}>Start</button>;
  }
};

export default AudioComponent;
