import React from 'react';

interface NavbarProps {
  onOpenMenu: () => void;
  onScrollToTop: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMenu,
  onScrollToTop,
  onNavigate
}) => {
  return (
    <header className="navbar-top-block" role="banner">
      <div className="section-inner-container navbar-flex-container">
        {/* Brand Logo / Text */}
        <div
          className="navbar-brand-logo"
          onClick={onScrollToTop}
          role="button"
          tabIndex={0}
          aria-label="Sameer Designs - Return to top"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onScrollToTop();
            }
          }}
        >
          SAMEER
          <br />
          DESIGNS
        </div>

        {/* Desktop Navigation Links (Shown on Desktop screens >= 768px) */}
        <nav className="desktop-navbar-nav" aria-label="Desktop Navigation">
          <ul className="desktop-navbar-list">
            <li>
              <button
                className="desktop-nav-item"
                onClick={() => onNavigate?.('hero')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="desktop-nav-item"
                onClick={() => onNavigate?.('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className="desktop-nav-item"
                onClick={() => onNavigate?.('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="desktop-nav-item"
                onClick={() => onNavigate?.('process')}
              >
                My Process
              </button>
            </li>
            <li>
              <a
                href="/Sameer_Chauhan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="desktop-nav-item nav-resume-btn"
                aria-label="View Sameer Chauhan Resume (PDF)"
              >
                Resume
              </a>
            </li>
            <li>
              <button
                className="desktop-nav-item nav-contact-pill"
                onClick={() => onNavigate?.('connect')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle (Shown on Mobile screens < 768px) */}
        <button
          className="navbar-menu-btn"
          onClick={onOpenMenu}
          aria-label="Open navigation menu"
          aria-haspopup="dialog"
        >
          <img src="/menu0.svg" alt="Menu" />
        </button>
      </div>
    </header>
  );
};
