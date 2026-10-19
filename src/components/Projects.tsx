import React from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onSelectProject }) => {
  return (
    <section id="projects" className="projects-section-block" aria-label="Projects">
      <div className="section-inner-container">
        <h2 className="projects-section-title">Projects</h2>

        <div className="projects-vertical-stack">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
