import React from "react";

import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";

const Landing = props => {
  return (
    <main className="App_content">
      <Intro />
      <Projects modal={props.modal} />
      <About />
    </main>
  );
};

export default Landing;
