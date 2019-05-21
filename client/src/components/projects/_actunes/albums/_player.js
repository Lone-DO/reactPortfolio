import React from "react";

const Player = ({ audioData, customData = ["Not Ready"], videoData }) => {
  console.log(audioData.Original.Normal["1PM"]);

  // document.selectQuery("player").src = audioData.Origial.Normal;
  const loadSong = () => {
    //
  };
  return [
    <audio controls loop autoPlay className="player" key="1">
      <source
        src="http://23.237.126.42/ost/animal-crossing-full-gamerip/xsusxbduxb/078%20-%203%20AM%20%28Cherry%29.mp3"
        type="audio/mp3"
      />
      Your browser does not support the audio element.
    </audio>,
    <button key="2" onClick={loadSong}>
      Change Audio
    </button>
  ];
};

export default Player;
