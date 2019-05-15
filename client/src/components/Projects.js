import React, { Component } from "react";

import appData from "./projects/appData";
import Project from "../models/Project";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      apps: appData
    };
  }

  componentDidMount() {
    //
  }

  render() {
    const Applications = this.state.apps.map(app => {
      return (
        <Project
          key={app.title}
          title={app.title}
          name={app.name}
          headline={app.headline}
          description={app.description}
          launch={app.launch}
          type={app.type}
        />
      );
    });

    return (
      <div className="App-projects">
        <p>List of personal applications</p>
        {Applications}
      </div>
    );
  }
}

export default Projects;
