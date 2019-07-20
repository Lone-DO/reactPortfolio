import React from "react";

const Contact = () => {
  return (
    <article className="App_content_contact">
      <h3 className="_title">
        <i className="material-icons">contact_mail</i> Get in{" "}
        <strong>Touch</strong>
      </h3>

      <address>
        Email: <a href="mailto:lotussythe@gmail.com">lotussythe@gmail.com</a>
        <br />
        Github:{" "}
        <a href="https://github.com/Lone-DO">https://github.com/Lone-DO</a>
        <br />
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/lone-do/">
          https://www.linkedin.com/in/lone-do/
        </a>
        <br />
      </address>
    </article>
  );
};

export default Contact;
