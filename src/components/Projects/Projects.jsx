import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao carregar projetos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className={styles.loading}>🚀 Carregando projetos da galáxia...</div>;
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.stars}></div>
      <h2 className={styles.title}> Meus Projetos</h2>
      <p className={styles.subtitle}>
        Criações que unem design, performance e tecnologia — direto do hiperespaço do React ⚡
      </p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
