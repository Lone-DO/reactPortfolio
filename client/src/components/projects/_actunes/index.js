import React, { Component } from "react";

class ACTunes extends Component {
  constructor() {
    super();
    this.state = {
      albumns: [],
      userAlbumns: []
    };
  }

  componentDidMount() {
    console.log("ACTunes Loaded");
  }

  render() {
    return (
      <div key="ACTunes">
        <p>Animal Crossing Radio...</p>
      </div>
    );
  }
}

export default ACTunes;
