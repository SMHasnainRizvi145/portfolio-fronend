import React from 'react';
import { Download, ExternalLink, Github, Linkedin } from 'lucide-react';

const Hero = ({ data }) => {
  const handleDownloadResume = () => {
    // Mock download functionality
    alert('Resume download would start here!');
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1920&h=1080&fit=crop" 
          alt="Developer workspace" 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {data.name}
          </h1>
          <h2 className="hero-subtitle">{data.title}</h2>
          <p className="hero-tagline">{data.tagline}</p>
          
          <div className="hero-actions">
            <button onClick={handleContactClick} className="btn-primary">
              Get In Touch
            </button>
            <button onClick={handleDownloadResume} className="btn-secondary">
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="hero-social">
            <a href={data.github} className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href={data.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;