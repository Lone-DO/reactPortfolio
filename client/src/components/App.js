import React, { Component } from "react";
import { Route } from "react-router-dom";

import "../assets/styles/App.css";

import Header from "./Header";
import Landing from "./Landing";
import ACTunesApp from "./projects/_actunes/index";
import AlbumNew from "./projects/_actunes/albums/AlbumNew";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: []
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(content = []) {
    try {
      const modal = document.querySelector(".modal");
      this.setState(prevState => {
        if (content.length === 0) {
          modal.style.opacity = 0;
          modal.style.visibility = "hidden";
        } else {
          modal.style.opacity = 1;
          modal.style.visibility = "visible";
        }

        return { modal: content };
      });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <Route
            path={`/`}
            exact
            render={props => <Header modal={this.toggleModal} />}
          />
          <Route
            path={`/`}
            exact
            render={props => <Landing modal={this.toggleModal} />}
          />
          <Route
            path={`/`}
            exact
            render={props => <Footer modal={this.toggleModal} />}
          />
          <div className="modal">
            <span className="modal__close" onClick={() => this.toggleModal([])}>
              X
            </span>
            {this.state.modal}
          </div>
          <Route path={`/actunes`} exact component={ACTunesApp} />
          <Route path={`/actunes/new`} component={AlbumNew} />
        </div>
      </div>
    );
  }
}

export default App;
