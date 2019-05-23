import React from "react";
import WeatherForm from "./WeatherForm";
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
        <button onClick={() => loadSong(props.setAlbum, "Raining")}>
          Rain
        </button>
        <button onClick={() => loadSong(props.setAlbum, "Winter")}>Snow</button>
        <button onClick={() => loadSong(props.setAlbum, "Normal")}>
          Sunny
        </button>
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
