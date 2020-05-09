import React, { Component } from "react";

// note to self - assets must be imported outside HTML
import logo from "../assets/images/avatar-Lotus.png";
import bannerLargeHD from "../assets/images/Banner--large-HD.jpg";
import bannerLarge from "../assets/images/Banner--large.jpg";
import bannerMediumHD from "../assets/images/Banner--medium-HD.jpg";
import bannerMedium from "../assets/images/Banner--medium.jpg";
import bannerSmallHD from "../assets/images/Banner--small-HD.jpg";
import bannerSmall from "../assets/images/Banner--small.jpg";
import bannerMobile from "../assets/images/Banner--mobile.jpg";

import Contact from "./Contact";

class Header extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    // window.onscroll = () => {
    //   const heading = document.getElementsByClassName("App_header_content")[0];
    //   const offset = heading.offsetTop;
    //   if (window.pageYOffset > offset) {
    //     heading.classList.add("sticky");
    //     console.log("Sticky");
    //   } else {
    //     heading.classList.remove("sticky");
    //   }
    // };
  }

  render() {
    const header_content_logo = (
      <div className="App_header_content_logo">
        <div className="App_header_content_logo-icon">
          <img src={logo} alt="Lotus Logo" />
        </div>
        <h1 className="App_header_content_logo-title">Lone-DO</h1>
      </div>
    );

    const navBar = (
      <nav className="App_header_nav">
        {header_content_logo}

        <ul className="App_header_nav-links">
          {/* <li id="about-link">About</li>
        <li id="project-link">Projects</li>
        <li id="resume-link">Resume</li> */}
          <button
            className="btn --transparent open-modal"
            onClick={() => this.props.modal(<Contact />)}
          >
            Contact Me
          </button>
        </ul>
      </nav>
    );

    return (
      <header className="App_header">
        <picture>
          <source
            srcSet={`${bannerLarge} 1920w,
            ${bannerLargeHD} 3840w`}
            media="(min-width: 1200px)"
          />
          <source
            srcSet={`${bannerMedium} 1380w,
            ${bannerMediumHD} 2760w`}
            media="(min-width: 800px)"
          />
          <source
            srcSet={`${bannerSmall} 800w,
             ${bannerSmallHD} 1980w`}
            media="(min-width: 600px)"
          />
          <img
            className="App_header-banner"
            alt="Porfolio Fox Banner"
            srcSet={`${bannerMobile} 640w`}
          />
        </picture>
        <section className="App_header_content">
          {header_content_logo}
          {navBar}
        </section>
      </header>
    );
  }
}

export default Header;
