import React from "react";

import About from "./About";
import Projects from "./Projects";

const Landing = props => {
  return (
    <main className="App_content">
      <About />
      <Projects modal={props.modal} />
    </main>
  );
};

export default Landing;
