import React from 'react';
import { socialLinksData } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer id="connect" className="footer-section-block" aria-label="Social links and contact">
      <div className="section-inner-container footer-flex-container">
        {/* Desktop Social Links with Badges */}
        <div className="footer-desktop-social-row">
          {socialLinksData.map((social) => (
            <a
              key={social.name}
              className={`footer-desktop-badge social-${social.name.toLowerCase()}`}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Sameer's ${social.name} profile`}
            >
              <img src={social.icon} alt={social.name} />
              <span className="badge-name">{social.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Social Icons Row (Matching Image 2) */}
        <div className="footer-social-icons-row">
          {socialLinksData.map((social) => (
            <a
              key={social.name}
              className={`footer-social-icon-btn social-${social.name.toLowerCase()}`}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Sameer's ${social.name} profile`}
            >
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>

        {/* "Get Connected to me." Action Link */}
        <button
          className="footer-connect-btn"
          onClick={onOpenContact}
          aria-label="Get connected to me - Open contact inquiry dialog"
        >
          Get Connected to me.
        </button>

        {/* Copyright Line */}
        <div className="footer-copyright-text">
          @ 2026 Sameer.All rights reserved
        </div>
      </div>
    </footer>
  );
};
