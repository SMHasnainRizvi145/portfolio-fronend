import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-name">{data.name}</h3>
              <p className="footer-title">{data.title}</p>
              <p className="footer-tagline">{data.tagline}</p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home" onClick={handleScrollToTop}>Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Services</h4>
                <ul>
                  <li>Web Development</li>
                  <li>E-commerce Solutions</li>
                  <li>API Development</li>
                  <li>Database Design</li>
                  <li>Technical Consulting</li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <div className="footer-social">
                  <a href={data.github} className="footer-social-link" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    GitHub
                  </a>
                  <a href={data.linkedin} className="footer-social-link" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                  <a href={`mailto:${data.email}`} className="footer-social-link">
                    <Mail size={20} />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>© {currentYear} {data.name}. All rights reserved.</p>
            </div>
            <div className="footer-credit">
              <p>
                Made with <Heart size={16} className="heart-icon" /> using React.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;