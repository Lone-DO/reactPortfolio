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

    return <div>Hello World</div>;
  }
}

export default Clock;
