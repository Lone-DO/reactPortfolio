import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../assets/styles/App.css";

import Header from "./Header";
import Landing from "./Landing";
import ACTunesApp from "./projects/_actunes/index";
import AlbumNew from "./projects/_actunes/albums/AlbumNew";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-body">
          <Route path="/" exact component={Header} />
          <Route path="/" exact component={Landing} />
          <Route path="/" exact component={Footer} />
          <Route path="/actunes" exact component={ACTunesApp} />
          <Route path="/actunes/new" component={AlbumNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
