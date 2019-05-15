import React, { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      genShowing: false,
      hintShowing: false
    };

    this.toggleGen = this.toggleGen.bind(this);
  }

  toggleGen() {
    this.setState(prevState => {
      return { genShowing: !prevState.genShowing };
    });
  }

  render() {
    return (
      <footer>
        <div id="time" />
        {this.state.genShowing ? (
          <div>
            <button disabled>Generations</button>
            <button onClick={this.toggleGen} className="btn cancel-button">
              X
            </button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleGen}>Generations</button>
          </div>
        )}
      </footer>
    );
  }
}

export default Footer;
