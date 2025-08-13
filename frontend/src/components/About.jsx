import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = ({ data, experience }) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about my background and experience</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-info">
              <div className="info-item">
                <User className="info-icon" size={20} />
                <span>{data.name}</span>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" size={20} />
                <span>{data.location}</span>
              </div>
            </div>
            
            <p className="about-description">{data.bio}</p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h4>5+</h4>
                <span>Years Experience</span>
              </div>
              <div className="highlight-item">
                <h4>50+</h4>
                <span>Projects Completed</span>
              </div>
              <div className="highlight-item">
                <h4>15+</h4>
                <span>Technologies Mastered</span>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <h3 className="experience-title">Professional Experience</h3>
            <div className="experience-timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="position">{exp.position}</h4>
                    <div className="company-info">
                      <span className="company">{exp.company}</span>
                      <span className="duration">
                        <Calendar size={16} />
                        {exp.duration}
                      </span>
                    </div>
                    <p className="description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;