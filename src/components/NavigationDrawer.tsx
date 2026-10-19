import React, { useEffect } from 'react';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="nav-drawer-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div className="nav-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="nav-drawer-header">
          <div className="nav-drawer-title">
            SAMEER<br />DESIGNS
          </div>
          <button
            className="nav-drawer-close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            &times;
          </button>
        </div>

        <nav>
          <ul className="nav-links-list">
            <li>
              <button
                className="nav-link-btn"
                onClick={() => onNavigate('hero')}
              >
                01. Home
              </button>
            </li>
            <li>
              <button
                className="nav-link-btn"
                onClick={() => onNavigate('projects')}
              >
                02. Projects
              </button>
            </li>
            <li>
              <button
                className="nav-link-btn"
                onClick={() => onNavigate('about')}
              >
                03. About &amp; Skills
              </button>
            </li>
            <li>
              <button
                className="nav-link-btn"
                onClick={() => onNavigate('process')}
              >
                04. My Process
              </button>
            </li>
            <li>
              <a
                href="/Sameer_Chauhan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link-btn nav-drawer-resume-link"
                onClick={onClose}
              >
                05. Resume (PDF) &nearr;
              </a>
            </li>
            <li>
              <button
                className="nav-link-btn"
                onClick={() => onNavigate('connect')}
              >
                06. Get Connected
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
