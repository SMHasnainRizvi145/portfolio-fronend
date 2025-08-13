import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'Laravel', label: 'Laravel' },
    { value: 'React.js', label: 'React.js' },
    { value: 'Magento', label: 'Magento' },
    { value: 'PHP', label: 'PHP' }
  ];

  const filteredProjects = filter === 'all' 
    ? data 
    : data.filter(project => project.technologies.includes(filter));

  const handleViewDemo = (url) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Demo not available for this project');
    }
  };

  const handleViewCode = (url) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Source code not publicly available');
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my recent work and achievements</p>
        </div>

        <div className="project-filters">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={`filter-btn ${filter === option.value ? 'active' : ''}`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <button 
                      onClick={() => handleViewDemo(project.demoUrl)}
                      className="action-btn demo-btn"
                      title="View Demo"
                    >
                      <Eye size={20} />
                    </button>
                    <button 
                      onClick={() => handleViewCode(project.githubUrl)}
                      className="action-btn code-btn"
                      title="View Code"
                    >
                      <Code size={20} />
                    </button>
                  </div>
                </div>
                <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <button 
                    onClick={() => handleViewDemo(project.demoUrl)}
                    className="btn-primary"
                    disabled={!project.demoUrl}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                  <button 
                    onClick={() => handleViewCode(project.githubUrl)}
                    className="btn-secondary"
                  >
                    <Github size={16} />
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;