import React from "react";
import { Link } from "react-router-dom";

const ProjectModel = props => {
  return (
    <section
      key={props.title}
      className={`App_content_projects_${props.title} `}
    >
      <h3 className="_title">{props.name}</h3>
      <p className="App_content_projects-headline">{props.headline}</p>
      <p className="App_content_projects-description">{props.description}</p>

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
