import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <div className={styles.glow}></div>
      <img src={project.image} alt={project.title} className={styles.image} />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

      <ul className={styles.techList}>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        ⚡ Ver Projeto
      </a>
    </div>
  );
};

export default ProjectCard;
