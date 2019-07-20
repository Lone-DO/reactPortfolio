import React, { Component } from "react";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      contactShowing: false,
      appShowing: false,
      modal: []
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(item, content = []) {
    this.setState(prevState => {
      switch (item) {
        case "contactShowing":
          document.querySelector(".modal").style.opacity(1);
          return {
            contactShowing: !prevState.contactShowing,
            appShowing: false,
            modal: content
          };
        case "appShowing":
          document.querySelector(".modal").style.opacity(1);
          return {
            appShowing: !prevState.appShowing,
            contactShowing: false,
            modal: content
          };
        default:
          return;
      }
    });
  }

  render() {
    return (
      <main className="App_content">
        <About />
        <Projects toggleModal={this.toggleModal} />
        <div className="modal">
          <div className="modal__close">X</div>
          {this.state.modal}
        </div>
      </main>
    );
  }
}

export default Landing;
