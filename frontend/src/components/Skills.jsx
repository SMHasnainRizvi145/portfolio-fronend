import React from 'react';
import { Code, Database, Globe, Wrench, Server, Zap } from 'lucide-react';

const Skills = ({ data }) => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: data.backend,
      color: 'backend'
    },
    {
      title: 'Frontend Development',
      icon: <Globe size={24} />,
      skills: data.frontend,
      color: 'frontend'
    },
    {
      title: 'E-commerce Platforms',
      icon: <Code size={24} />,
      skills: data.ecommerce,
      color: 'ecommerce'
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: data.databases,
      color: 'database'
    },
    {
      title: 'Development Tools',
      icon: <Wrench size={24} />,
      skills: data.tools,
      color: 'tools'
    },
    {
      title: 'Other Technologies',
      icon: <Zap size={24} />,
      skills: data.other,
      color: 'other'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category ${category.color}`}>
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;