import React from "react";

const ProjectModel = props => {
  const modules = props.modules.map(module => {
    return <span key={props.title + module}>{module}</span>;
  });
  return (
    <section
      key={props.title}
      className={`App_content_projects_${props.title}`}
    >
      <h3 className="App_content_projects-title _title">{props.name}</h3>
      <p className="App_content_projects-headline">{props.headline}</p>
      <p className="App_content_projects-description">{props.description}</p>

      {props.type === "app" ? (
        <button
          className="btn --transparent modal-open"
          onClick={() => props.modal(props.launch)}
        >
          Launch
          <i className="material-icons">pageview</i>
        </button>
      ) : (
        <a href={props.launch}>
          <button className="btn --transparent">
            Preview <i className="material-icons">launch</i>
          </button>
        </a>
      )}

      <a href={props.github}>
        <button className="btn --transparent">
          Github <i className="material-icons">code</i>
        </button>
      </a>
      <button
        className="btn --transparent"
        onClick={() =>
          props.toggle(`.App_content_projects_${props.title}`, "article")
        }
      >
        <i className="material-icons">speaker_notes</i>
      </button>
      <article
        className={`App_content_projects-modules ${props.title}-modules`}
      >
        {modules}
      </article>
    </section>
  );
};

export default ProjectModel;
