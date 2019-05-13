import React from "react";
import "../assets/styles/App.css";

import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
