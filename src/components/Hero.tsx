import React from 'react';

interface HeroProps {
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork }) => {
  return (
    <section id="hero" className="hero-section-block" aria-label="Introduction">
      <div className="section-inner-container">
        <h1 className="hero-headline-text">
          Hello, I’m Sameer Chauhan.
          <br />
          A UI/UX Designer with an engineering
          <br />
          foundation.
          <br />
          I turn complex logic into intuitive,
          <br />
          high converting digital products.
        </h1>

        {/* "View my work >" CTA Button with layered offset styling */}
        <div className="hero-cta-box">
          <button
            className="hero-pill-btn-group"
            onClick={onViewWork}
            aria-label="View my work - Jump to projects section"
          >
            <div className="pill-btn-outline" />
            <div className="pill-btn-solid">
              <span className="pill-btn-label">View my work &gt;</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
