import React, { useState, useEffect } from 'react';
import { socialLinksData } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sameerchauhan.design@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Contact Sameer Chauhan"
    >
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close contact dialog"
        >
          &times;
        </button>

        <h3 className="modal-title">Get Connected</h3>
        <p className="modal-desc">
          Have an upcoming product design challenge, website revamp, or design system project? Let’s create something exceptional together.
        </p>

        {submitted ? (
          <div className="toast-notification">
            Thank you! Your message has been sent. I'll get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">
                Your Name
              </label>
              <input
                id="contact-name"
                className="form-input"
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">
                Email Address
              </label>
              <input
                id="contact-email"
                className="form-input"
                type="email"
                required
                placeholder="alex@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className="form-textarea"
                rows={3}
                placeholder="Tell me about your product vision..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="modal-primary-btn" style={{ marginBottom: '16px' }}>
              Send Message
            </button>
          </form>
        )}

        <div style={{ borderTop: '1px solid #ebe5dd', paddingTop: '16px', marginTop: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#666666' }}>
              Direct email: <strong>sameerchauhan.design@gmail.com</strong>
            </span>
            <button
              onClick={handleCopyEmail}
              style={{
                background: '#eee8e0',
                border: 'none',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '11px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div style={{ display: 'flex', gap: '14px', marginTop: '14px', alignItems: 'center' }}>
            {socialLinksData.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  color: '#222222',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  style={{ width: '14px', height: '14px', objectFit: 'contain' }}
                />
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
