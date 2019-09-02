import React from "react";
import ACTunes from "./_actunes/index.js";
import Elevator from "../projects/_extra/components/Elevator";
import Invoice from "../projects/_extra/components/Invoice";

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
      "MEEN Stack",
      "Mongo",
      "Express",
      "Ember.js",
      "Node.js",
      "SASS",
      "jQuery",
      "HTML5",
      "CSS3",
      "JavaScript - ES6"
    ]
  },
  {
    id: 2,
    type: ".url",
    title: "EmailyApp",
    name: "Emaily",
    headline: "Course Project, Built while learning Node & React",
    description: "",
    launch: "https://lonedo-emaily.herokuapp.com/",
    github: "https://github.com/Lone-DO/Emaily",
    modules: [
      "Heroku",
      "HTML5",
      "CSS3",
      "JavaScript - ES6",
      "MongdoDB",
      "Express",
      "React",
      "Redux",
      "Node.js",
      "Materialize.css",
      "Sendgrid",
      "Stripe",
      "OAuth"
    ]
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
    certificate: "https://www.udemy.com/certificate/UC-MRA7ABA8/",
    modules: [
      "HTML5",
      "CSS3",
      "JavaScript - ES6",
      "Gulp",
      "PostCSS",
      "jQUery",
      "Normalize.CSS"
    ]
  },

  {
    id: 4,
    type: ".url",
    title: "CSharp",
    name: "C# Shorts",
    headline: "Projects built while studying C# via Treehouse",
    description:
      "My small projects, short and sweet using node & C#. After going a year with JavaScript, picking up this language felt natural for what exposure i managed to dabble into.",
    launch:
      "https://github.com/Lone-DO/Treehouse/raw/master/C%23/FitnessFrog/App.exe",
    github: "https://github.com/Lone-DO/Treehouse/tree/master/C%23",
    modules: ["Node.js", "C#", ".Net"]
  },
  {
    id: 5,
    type: ".url",
    title: "UndertaleApp",
    name: "Undertale",
    headline: "First project, built using Ember.js",
    description:
      "Recreational Project that restructures the original Site to a more update formality. Built using Ember, my first project I've built as a Developer. Complete overhaul of hands-on coding and features that utilize API information for the user's discretion. Allows fans to post 'Mail' on the site for the Undertale Devs to see, and others to respond to. Built with Ember.js, Backend localStorage.",
    launch: "https://lone-do.github.io/#/undertale/",
    github: "https://github.com/Lone-DO/Undertale-Recreation",
    modules: [
      "HTML5",
      "CSS3",
      "JavaScript - ES6",
      "Ember.js",
      "localStorage",
      "SASS",
      "jQuery"
    ]
  },
  {
    id: 6,
    type: "app",
    title: "ElevatorApp",
    name: "Elevator",
    headline: "JavaScript Short: Elevator Simulator 2019",
    description:
      "JavaScript Short: Created an app that simulates an elevator, testing state management skills",
    launch: [<Elevator />],
    github:
      "https://github.com/Lone-DO/javascript-widgets/blob/master/src/components/Elevator.js",
    modules: ["JavaScript", "React.js"]
  },
  {
    id: 7,
    type: "app",
    title: "InvoiceApp",
    name: "Invoice Generator",
    headline: "JavaScript Short: Data Manipulation",
    description:
      "JavaScript Short: Sorting generated invoices, testing data manipulation skills.",
    launch: [<Invoice />],
    github:
      "https://github.com/Lone-DO/javascript-widgets/blob/master/src/components/Invoice.js",
    modules: ["JavaScript", "React.js"]
  }
];

export default appData;
