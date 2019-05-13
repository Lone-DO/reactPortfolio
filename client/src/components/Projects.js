import React, { Component } from "react";

import appData from "./projects/appData";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      apps: appData
    };
  }

  render() {
    const Applications = this.state.apps.map(app => {
      return (
        <section key={app.title}>
          <h3>{app.name}</h3>
          <p>{app.headline}</p>
          <i>{app.description}</i>

          {app.type === "app" ? (
            app.launch
          ) : (
            <a href={app.launch}>
              <button>Launch App</button>
            </a>
          )}
        </section>
      );
    });

    return (
      <div>
        <h2>List of personal applications</h2>
        {Applications}
      </div>
    );
  }
}

export default Projects;
