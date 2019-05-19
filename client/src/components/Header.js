import React from "react";
import { Link } from "react-router-dom";

// note to self - assets must be imported outside HTML
import logo from "../assets/images/avatar-Lotus.png";

const Header = () => {
  return (
    <header className="App_header">
      <Link to="/">
        <picture className="App_header-banner">
          <source />
          <img alt="" srcset="" />
        </picture>
        <img className="App_header_logo-img" src={logo} alt="" />
        <h1 className="App_header_logo-title">Lone-DO</h1>
      </Link>
    </header>
  );
};

export default Header;
