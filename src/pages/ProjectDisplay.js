import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="" className="project-image" />

      <div className="project-details">
        <div className="project-about">
          <h2>About the Project</h2>
          <p>{project.about}</p>
        </div>

        <div className="project-skills">
          <h2>Skills Used</h2>
          <p>{project.skills}</p>
        </div>
      </div>

      <div className="demo-github">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            <button className="btn">Live Demo</button>
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDisplay;
