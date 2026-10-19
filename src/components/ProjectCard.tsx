import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelectProject
}) => {
  const cardIndex = index + 1;

  return (
    <article
      className={`portfolio-card card-${cardIndex}`}
      onClick={() => onSelectProject(project)}
      tabIndex={0}
      role="button"
      aria-label={`View case study: ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectProject(project);
        }
      }}
    >
      {/* Top Banner with Colored Background & Overlapping Mockups */}
      <div
        className="card-top-banner"
        style={{ backgroundColor: project.bannerColor }}
      >
        {/* Right mockup image */}
        {project.imageRight && (
          <img
            className="card-mockup-img mockup-right"
            src={project.imageRight}
            alt={`${project.title} Preview Right`}
          />
        )}

        {/* Left mockup image */}
        <img
          className="card-mockup-img mockup-left"
          src={project.imageLeft}
          alt={`${project.title} Preview Left`}
        />
      </div>

      {/* Card Details */}
      <div className="card-info-content">
        <h3 className={`card-project-title title-c${cardIndex}`}>
          {project.title}
        </h3>

        <p className={`card-project-desc desc-c${cardIndex}`}>
          {project.description}
        </p>

        {/* Bottom row: Tag pills on left, circular arrow on right */}
        <div className="card-bottom-row">
          <div className="card-tag-pills">
            {project.tags.map((tag, i) => (
              <span key={i} className="card-tag-pill">
                {tag}
              </span>
            ))}
          </div>

          {/* Circular arrow button linking directly to project Behance case study */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-circle-arrow-btn"
            aria-label={`Open Behance case study for ${project.title}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <span className="circle-arrow-icon">-&gt;</span>
          </a>
        </div>
      </div>
    </article>
  );
};
