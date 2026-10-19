import React, { useState } from 'react';
import { processStepsData } from '../data/portfolioData';
import { ProcessStep } from '../types';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<ProcessStep | null>(null);

  return (
    <section id="process" className="process-section-block" aria-label="Design Process">
      <div className="section-inner-container">
        <h2 className="process-section-title">My Process</h2>

        {/* Desktop 4-step Cards Layout (Shown on Desktop >= 768px) */}
        <div className="process-desktop-grid">
          {processStepsData.map((step) => (
            <div
              key={step.id}
              className={`process-desktop-card ${activeStep?.id === step.id ? 'active' : ''}`}
              onClick={() => setActiveStep(activeStep?.id === step.id ? null : step)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveStep(activeStep?.id === step.id ? null : step);
                }
              }}
            >
              <div className="process-desktop-icon-wrap">
                <img src={step.icon} alt={step.title} />
              </div>
              <span className="process-step-num">0{step.id}</span>
              <h3 className="process-desktop-title">{step.title}</h3>
              <p className="process-desktop-sub">{step.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Mobile 4-icon Row Layout (Shown on Mobile < 768px, matching Image 2) */}
        <div className="process-mobile-row">
          {processStepsData.map((step) => (
            <button
              key={step.id}
              className={`process-icon-action-btn ${activeStep?.id === step.id ? 'active' : ''}`}
              onClick={() => setActiveStep(activeStep?.id === step.id ? null : step)}
              aria-label={`Step ${step.id}: ${step.title}`}
              title={`Step ${step.id}: ${step.title} - ${step.subtitle}`}
            >
              <img src={step.icon} alt={step.title} className="process-icon-img" />
            </button>
          ))}
        </div>

        {/* Mobile Tooltip when an icon is clicked */}
        {activeStep && (
          <div className="process-step-tooltip">
            <div className="tooltip-content">
              <strong>Step {activeStep.id}: {activeStep.title}</strong>
              <p>{activeStep.subtitle}</p>
            </div>
            <button
              className="tooltip-close"
              onClick={() => setActiveStep(null)}
              aria-label="Close step details"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
