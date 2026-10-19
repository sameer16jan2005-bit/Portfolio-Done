import React, { useState } from 'react';
import { projectsData } from './data/portfolioData';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { NavigationDrawer } from './components/NavigationDrawer';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setIsDrawerOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="website-root">
      {/* Navigation Bar */}
      <Navbar
        onOpenMenu={() => setIsDrawerOpen(true)}
        onScrollToTop={handleScrollToTop}
        onNavigate={handleNavigate}
      />

      <main role="main">
        {/* Hero Section */}
        <Hero onViewWork={() => handleNavigate('projects')} />

        {/* Projects Section (4 Cards) */}
        <Projects
          projects={projectsData}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* About & Skills Snapshot */}
        <About />

        {/* My Process Section */}
        <Process />
      </main>

      {/* Footer / Connect */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Mobile Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Contact Inquiry Dialog */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
