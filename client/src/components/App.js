import React from "react";
import { Route } from "react-router-dom";

import "../assets/styles/App.css";

import Header from "./Header";
import Landing from "./Landing";
import ACTunesApp from "./projects/_actunes/index";
import AlbumNew from "./projects/_actunes/albums/AlbumNew";
import Footer from "./Footer";

const App = () => {
  var env = process.env.PUBLIC_URL;
  console.log(`${env}/actunes`);
  return (
    <div className="App">
      <div className="App-body">
        <Route path={`${env}/`} exact component={Header} />
        <Route path={`${env}/`} exact component={Landing} />
        <Route path={`${env}/`} exact component={Footer} />
        <Route path={`${env}/actunes`} exact component={ACTunesApp} />
        <Route path={`${env}/actunes/new`} component={AlbumNew} />
      </div>
    </div>
  );
};

export default App;
