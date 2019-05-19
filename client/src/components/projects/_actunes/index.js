import React, { Component } from "react";

import Clock from "./_clock";
import Header from "./_header";
import Footer from "./_footer";
// import Generations from "./generations";

class ACTunes extends Component {
  constructor() {
    super();
    this.state = {
      albumns: [],
      userAlbumns: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://api.mlab.com/api/1/databases/lone-do/collections/albums?apiKey=9P6rUGDfq5OxFXag9RZYNkk3U2vF6IT0"
    )
      .then(res => res.json())
      .then(res => this.setState({ albumns: res, isLoaded: true }));
  }

  renderContent() {
    switch (this.state.isLoaded) {
      case null:
        return;
      case false:
        return <h3>Loading...</h3>;
      default:
        return [
          <Clock key="AC-Clock" data={this.state.albumns} />,
          <Footer key="AC-Footer" data={this.state.albumns} />
        ];
    }
  }

  render() {
    return (
      <div className="ACTunes_body" key="ACTunes">
        <Header />
        {this.renderContent()}
      </div>
    );
  }
}

export default ACTunes;
