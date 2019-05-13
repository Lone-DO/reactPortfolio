import React from "react";

const Project = props => {
  return (
    <section key={props.title}>
      <h3>{props.name}</h3>
      <p>{props.headline}</p>
      <i>{props.description}</i>

      {props.type === "app" ? (
        props.launch
      ) : (
        <a href={props.launch}>
          <button>Launch App</button>
        </a>
      )}
    </section>
  );
};

export default Project;
