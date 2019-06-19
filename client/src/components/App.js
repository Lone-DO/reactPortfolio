import React from "react";
import { Route } from "react-router-dom";

import "../assets/styles/App.css";

import Header from "./Header";
import Landing from "./Landing";
import ACTunesApp from "./projects/_actunes/index";
import AlbumNew from "./projects/_actunes/albums/AlbumNew";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <div className="App-body">
        <Route path={`/`} component={Header} />
        <Route path={`/`} component={Landing} />
        <Route path={`/`} component={Footer} />
        <Route path={`/actunes`} exact component={ACTunesApp} />
        <Route path={`/actunes/new`} component={AlbumNew} />
      </div>
    </div>
  );
};

export default App;
