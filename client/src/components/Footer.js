import React from "react";
import Contact from "./Contact";
const Footer = props => {
  return (
    //
    <footer className="App_footer">
      Copyright © 2016-2020 Lone-DO. All rights reserved.
      <button
        className="btn --transparent open-modal"
        onClick={() => props.modal(<Contact />)}
      >
        Contact Me
      </button>
    </footer>
  );
};

export default Footer;
