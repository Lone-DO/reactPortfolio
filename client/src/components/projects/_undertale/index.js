import React, { Component } from "react";

class Undertale extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <div key="Undertale">
        <p>Undertale Contents</p>
      </div>
    );
  }
}

export default Undertale;
