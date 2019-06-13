import React, { Component } from "react";
import { Link } from "react-router-dom";

// note to self - assets must be imported outside HTML
import logo from "../assets/images/avatar-Lotus.png";
import bannerLargeHD from "../assets/images/Banner--large-HD.jpg";
import bannerLarge from "../assets/images/Banner--large.jpg";
import bannerMediumHD from "../assets/images/Banner--medium-HD.jpg";
import bannerMedium from "../assets/images/Banner--medium.jpg";
import bannerSmallHD from "../assets/images/Banner--small-HD.jpg";
import bannerSmall from "../assets/images/Banner--small.jpg";
import bannerMobile from "../assets/images/Banner--mobile.jpg";

class Header extends Component {
  navbar() {}

  render() {
    const navBar = (
      <nav className="App_header_nav">
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </nav>
    );

    return (
      <header className="App_header">
        <picture>
          <source
            srcSet={`${bannerLarge} 1920w,
            ${bannerLargeHD} 3840w`}
            media="(min-width: 1380px)"
          />
          <source
            srcSet={`${bannerMedium} 1380w,
            ${bannerMediumHD} 2760w`}
            media="(min-width: 990px)"
          />
          <source
            srcSet={`${bannerSmall} 990w,
             ${bannerSmallHD} 1980w`}
            media="(min-width: 640px)"
          />
          <img
            className="App_header-banner"
            alt="Porfolio Fox Banner"
            srcSet={`${bannerMobile} 640w`}
          />
        </picture>
        <div className="App_header_content">
          <Link to="/">
            <img
              className="App_header_content-logo"
              src={logo}
              alt="Lotus Logo"
            />
            <h1 className="App_header_content-title">Lone-DO</h1>
          </Link>
          <span className="hamburger" />
          {navBar}
        </div>
      </header>
    );
  }
}

export default Header;
