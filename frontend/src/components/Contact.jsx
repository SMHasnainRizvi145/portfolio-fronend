import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      alert(`Thank you ${formData.name}! Your message has been sent. I'll get back to you soon.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your next project or any opportunities</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" size={20} />
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${data.email}`} className="contact-value">{data.email}</a>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone className="contact-icon" size={20} />
                <div>
                  <span className="contact-label">Phone</span>
                  <a href={`tel:${data.phone}`} className="contact-value">{data.phone}</a>
                </div>
              </div>
              
              <div className="contact-item">
                <MapPin className="contact-icon" size={20} />
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{data.location}</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-buttons">
                <a href={data.github} className="social-btn github" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                  GitHub
                </a>
                <a href={data.linkedin} className="social-btn linkedin" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="availability">
              <h4>Availability</h4>
              <p>Currently available for new projects and collaborations. Typical response time: 24 hours.</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Web Development">Web Development Project</option>
                  <option value="E-commerce">E-commerce Solution</option>
                  <option value="API Development">API Development</option>
                  <option value="Magento">Magento Development</option>
                  <option value="Consultation">Technical Consultation</option>
                  <option value="Collaboration">Collaboration Opportunity</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project, requirements, timeline, and any specific details..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;