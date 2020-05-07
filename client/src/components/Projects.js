import React, { Component } from "react";

import appData from "./projects/appData";
import ProjectModel from "./_projectModel";

class Projects extends Component {
  constructor(props) {
    super();
    this.state = {
      apps: appData
    };
  }

  toggleElement(_class, _target) {
    let elem = document.querySelector(`${_class} ${_target}`);
    if (elem.style.display === "block") {
      elem.style.display = "none";
    } else {
      elem.style.display = "block";
    }
  }

  render() {
    console.log();
    const Applications = this.state.apps.map(app => {
      return (
        <ProjectModel
          modal={this.props.modal}
          key={app.title}
          title={app.title}
          name={app.name}
          headline={app.headline}
          description={app.description}
          launch={app.launch}
          github={app.github}
          modules={app.modules}
          type={app.type}
          toggle={this.toggleElement}
        />
      );
    });

    return (
      <div className="App_content_projects" data-matching-link="#project-link">
        <h2 className="App_content-title">List of personal applications</h2>
        {Applications}
        <hr></hr>
      </div>
    );
  }
}

export default Projects;
