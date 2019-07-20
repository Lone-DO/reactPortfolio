import React from "react";
import ACTunes from "./_actunes/index.js";

const appData = [
  {
    id: 1,
    type: "app",
    title: "ACTunesApp",
    name: "Animal Crossing Tunes",
    headline: "Second Project, built using EmberCLI & MongoDB",
    description:
      "Creative application that brings the daily soundtracks of Animal Crossing back, and now it's here to stay for our daily endeavors unlike never before. Able to choose smoothly between the user's desired Generation, from the hit classics like, original Animal Crossing from GameCube, to City Folk from the WII U, and the latest New Leaf on the 3DS. Built with the MEEN stack, backend API through Mongodb.",
    launch: [<ACTunes />],
    github: "https://github.com/Lone-DO/AC-Clock",
    modules: [
      "SASS",
      "Mongo",
      "jQuery",
      "Express",
      "ES2015",
      "Ember.js",
      "Node.js"
    ]
  },
  {
    id: 2,
    type: ".url",
    title: "UndertaleApp",
    name: "Undertale",
    headline: "First project, built using Ember.js",
    description:
      "Recreational Project that restructures the original Site to a more update formality. Built using Ember, my first project I've built as a Developer. Complete overhaul of hands-on coding and features that utilize API information for the user's discretion. Allows fans to post 'Mail' on the site for the Undertale Devs to see, and others to respond to. Built with Ember.js, Backend localStorage.",
    launch: "https://lone-do.github.io/#/undertale/",
    github: "https://github.com/Lone-DO/Undertale-Recreation",
    modules: ["SASS", "jQuery", "ES2015", "Ember.js", "localStorage"]
  },
  {
    id: 3,
    type: ".url",
    title: "AirlineApp",
    name: "Airline",
    headline: "Course Project, Built while learning ES6",
    description: "",
    launch: "https://lone-do.github.io/travel-site",
    github: "https://github.com/Lone-DO/travel-site",
    modules: ["SASS", "jQuery", "ES2015", "Ember.js", "localStorage"]
  },
  {
    id: 4,
    type: ".url",
    title: "EmailyApp",
    name: "Emaily",
    headline: "Course Project, Built while learning Node & React",
    description: "",
    launch: "https://lonedo-emaily.herokuapp.com/",
    github: "https://github.com/Lone-DO/Emaily",
    modules: ["SASS", "jQuery", "ES2015", "Ember.js", "localStorage"]
  }
];

export default appData;
