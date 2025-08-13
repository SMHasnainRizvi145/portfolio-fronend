import React from 'react';
import { Code, ShoppingCart, Zap, Database, Palette, Settings } from 'lucide-react';

const Services = ({ data }) => {
  const iconMap = {
    Code: <Code size={32} />,
    ShoppingCart: <ShoppingCart size={32} />,
    Zap: <Zap size={32} />,
    Database: <Database size={32} />,
    Palette: <Palette size={32} />,
    Settings: <Settings size={32} />
  };

  const handleServiceInquiry = (serviceName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    // You could also pre-fill a contact form with the service name
    alert(`Inquiry about ${serviceName}. Contact form will be pre-filled.`);
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services Offered</h2>
          <p className="section-subtitle">Professional development services tailored to your needs</p>
        </div>

        <div className="services-grid">
          {data.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {iconMap[service.icon]}
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-list">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleServiceInquiry(service.title)}
                  className="service-btn"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss how I can help bring your ideas to life with professional development services.</p>
            <button 
              onClick={() => handleServiceInquiry('General Inquiry')}
              className="btn-primary large"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;