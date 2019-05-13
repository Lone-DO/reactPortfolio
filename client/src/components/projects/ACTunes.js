import React, { Component } from "react";

class ACTunes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("ACTunes Loaded");
  }

  render() {
    return (
      <div>
        <p>Animal Crossing Radio...</p>
      </div>
    );
  }
}

export default ACTunes;
