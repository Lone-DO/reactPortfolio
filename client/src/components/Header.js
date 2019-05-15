import React from "react";

// note to self - assets must be imported outside HTML
import logo from "../assets/images/titan.gif";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} alt="" />
      <p> Header Contents...</p>
    </header>
  );
};

export default Header;
