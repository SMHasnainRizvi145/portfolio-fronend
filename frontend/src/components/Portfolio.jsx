import React, { useState } from 'react';
import { portfolioData } from '../mockData';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="portfolio-container">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.personal} experience={portfolioData.experience} />
        <Skills data={portfolioData.skills} />
        <Projects data={portfolioData.projects} />
        <Services data={portfolioData.services} />
        <Contact data={portfolioData.personal} />
      </main>
      <Footer data={portfolioData.personal} />
    </div>
  );
};

export default Portfolio;