import React, { Component } from "react";
import Clock from "./Clock";
import Header from "./_header";
import Footer from "./_footer";
import audioData from "./_audioData";

import loadingGif from "../../../assets/images/loading.gif";

require("es6-promise").polyfill();
require("isomorphic-fetch");

class ACTunes extends Component {
  constructor() {
    super();
    this.state = {
      videoData: [],
      audioData: audioData,
      userAlbumns: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      "https://api.mlab.com/api/1/databases/lone-do/collections/albums?apiKey=9P6rUGDfq5OxFXag9RZYNkk3U2vF6IT0"
    )
      .then(res => res.json())
      .then(res => this.setState({ videoData: res, isLoaded: true }));
  }

  renderContent() {
    switch (this.state.isLoaded) {
      case null:
        return;
      case false:
        return [
          <img key="loadingGif" alt="loading assets gif" src={loadingGif} />,
          <h3 key="loadingTxt">Loading...</h3>
        ];
      default:
        return [
          <Clock key="AC-Clock" audioData={this.state.audioData} />,
          <Footer key="AC-Footer" audioData={this.state.audioData} />
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
