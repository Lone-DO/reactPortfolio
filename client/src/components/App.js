import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../assets/styles/App.css";

import Header from "./Header";
import Landing from "./Landing";
import ACTunesApp from "./projects/_actunes/index";
import UndertaleApp from "./projects/_undertale/index";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-body">
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/actunes" exact component={ACTunesApp} />
          <Route path="/undertale" exact component={UndertaleApp} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
