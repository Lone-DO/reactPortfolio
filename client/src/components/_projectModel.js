import React from "react";
import { Link } from "react-router-dom";

const ProjectModel = props => {
  return (
    <section key={props.title} className={`App-${props.title}`}>
      <h3>{props.name}</h3>
      <p>{props.headline}</p>
      <i>{props.description}</i>

      {props.type === "app" ? (
        <Link to={props.launch}>
          <button>Launch App</button>
        </Link>
      ) : (
        <a href={props.launch}>
          <button>Launch App</button>
        </a>
      )}
    </section>
  );
};

export default ProjectModel;
