import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Project details for ${project.title}`}
    >
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project details"
        >
          &times;
        </button>

        <div
          className="modal-banner-preview"
          style={{ backgroundColor: project.bannerColor }}
        >
          <img
            src={project.imageLeft}
            alt={`${project.title} Preview 1`}
          />
          {project.imageRight && (
            <img
              src={project.imageRight}
              alt={`${project.title} Preview 2`}
            />
          )}
        </div>

        <h3 className="modal-title">{project.title}</h3>
        <p className="modal-desc">{project.description}</p>

        <div className="modal-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {project.details && (
          <div className="modal-details-box">
            <h4 className="modal-details-heading">Case Study Overview</h4>
            <p
              style={{
                fontSize: '13px',
                color: '#444444',
                lineHeight: '160%',
                marginBottom: '14px'
              }}
            >
              {project.details.overview}
            </p>

            <h4 className="modal-details-heading">Role &amp; Deliverables</h4>
            <p
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#222222',
                marginBottom: '6px'
              }}
            >
              {project.details.role}
            </p>
            <ul className="modal-deliverables-list">
              {project.details.deliverables.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-primary-btn"
        >
          View Full Project on Behance &rarr;
        </a>
      </div>
    </div>
  );
};
