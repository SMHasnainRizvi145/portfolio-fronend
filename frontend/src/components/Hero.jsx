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

  // Floating code elements
  const codeElements = [
    { text: 'const dev = "Hasnain";', top: '15%', left: '10%', delay: 0 },
    { text: '{ Laravel, React }', top: '25%', right: '15%', delay: 0.5 },
    { text: 'function() { return ✨; }', top: '60%', left: '5%', delay: 1 },
    { text: 'PHP + MySQL', top: '70%', right: '10%', delay: 1.5 },
    { text: 'API.create()', top: '40%', right: '20%', delay: 0.8 },
    { text: '<?php echo "Hello"; ?>', top: '80%', left: '15%', delay: 2 }
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      {/* Floating Code Elements */}
      {codeElements.map((element, index) => (
        <div
          key={index}
          className="floating-code"
          style={{
            position: 'absolute',
            top: element.top,
            left: element.left,
            right: element.right,
            animationDelay: `${element.delay}s`,
            zIndex: 1
          }}
        >
          {element.text}
        </div>
      ))}
      
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