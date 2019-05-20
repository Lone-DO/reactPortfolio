import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderContent() {
    this.props.data.map(album => console.log(album));
  }

  render() {
    this.renderContent();

    return (
      <div>
        <audio controls loop autoplay="true">
          <source
            src="http://23.237.126.42/ost/animal-crossing-full-gamerip/xsusxbduxb/078%20-%203%20AM%20%28Cherry%29.mp3"
            type="audio/mp3"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Clock;
