import React from "react";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Landing = () => {
  return (
    <main className="App_contents">
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Landing;
