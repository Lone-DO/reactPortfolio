import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../assets/styles/App.css";

import Header from "./Header";
import Landing from "./Landing";

import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
