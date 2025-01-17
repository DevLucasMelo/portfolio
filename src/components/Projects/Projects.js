import React, { useState } from 'react';
import uniqid from 'uniqid';
import { projects, projectImagesEcommerce, projectImagesFinanceiro, projectImagesBiblioteca } from '../../portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ProjectsImages from '../ProjectsImages/ProjectsImages';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null); // Estado para o projeto selecionado

  if (!projects.length) return null;

  const handleProjectClick = (projectName) => {
    setSelectedProject((prevProject) => (prevProject === projectName ? null : projectName));
  };

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projetos</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <div
            key={uniqid()}
            onClick={() => handleProjectClick(project.name)}
            onKeyDown={(e) => e.key === 'Enter' && handleProjectClick(project.name)} 
            role="button" 
            tabIndex={0} 
            className={`project ${
              selectedProject === project.name ? 'project--selected' : ''
            }`}
          >
            <ProjectContainer project={project} />
          </div>
        ))}
      </div>

      {selectedProject === 'Projeto e-commerce de calçados' && (
        <ProjectsImages images={projectImagesEcommerce} />
      )}

      {selectedProject === 'Projeto gerenciamento financeiro' && (
        <ProjectsImages images={projectImagesFinanceiro} />
      )}

      {selectedProject === 'Projeto sistema biblioteca' && ( // Verifica se o projeto selecionado é a biblioteca
        <ProjectsImages images={projectImagesBiblioteca} />
      )}
    </section>
  );
};

export default Projects;
