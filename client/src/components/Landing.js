import React from "react";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Landing = props => {
  return (
    <main className="App_content">
      <About />
      <Projects modal={props.modal} />
      <button
        className="btn --transparent --wide open-modal"
        onClick={() => props.modal(<Contact />)}
      >
        Contact Me
      </button>
    </main>
  );
};

export default Landing;
