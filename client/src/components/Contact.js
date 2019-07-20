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

      <p className="credits">
        Credits to "Mako - Coyote" for the artistic inspiration <br />
        All Rights reserved, check out the creator below <br />
        <a href="https://www.youtube.com/watch?v=i0v6xKe2M0Q">Music Video,</a>
        <br />
        <a href="https://www.youtube.com/channel/UClpog0YxmljvL01cnQ1BeLA">
          Artist - wearemako
        </a>
      </p>
    </article>
  );
};

export default Contact;
