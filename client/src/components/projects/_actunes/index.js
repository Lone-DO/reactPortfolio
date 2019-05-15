import React, { Component } from "react";

import Guide from "./_guide";
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
      isloaded: false
    };
  }

  componentDidMount() {
    console.log("ACTunes Loaded");
    fetch(
      "https://api.mlab.com/api/1/databases/lone-do/collections/albums?apiKey=9P6rUGDfq5OxFXag9RZYNkk3U2vF6IT0"
    )
      .then(res => res.json())
      .then(res => this.setState({ albumns: res }));
  }

  render() {
    return (
      <div className="ACTunes_body" key="ACTunes">
        <Header />
        <Clock props={this.state.albumns} />
        <Guide />
        <Footer />
      </div>
    );
  }
}

export default ACTunes;
