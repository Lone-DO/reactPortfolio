import React from "react";
import { Link } from "react-router-dom";

// note to self - assets must be imported outside HTML
import logo from "../assets/images/titan.gif";

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <p> Header Contents...</p>
    </header>
  );
};

export default Header;
