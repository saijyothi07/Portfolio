
// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills'; 
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Navbar />

      {/* HOME SECTION */}
      <div id="home" className="intro-wrapper">
        <div className="intro-text">
          <h1>Pulakunta Sai Jyothi</h1>
          <p className="tagline">Aspiring Full Stack Developer & AI Enthusiast</p>
        </div>
        <div className="intro-profile">
          <img src="/profile1.jpg" alt="Sai Jyothi" className="profile-image" />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a passionate BTech student specializing in Computer Science and Engineering. 
          My interests lie at the intersection of <strong>Full Stack Development</strong>, <strong>Machine Learning</strong>, and <strong>Cybersecurity</strong>.
        </p>
        <p>
          With a strong foundation in <strong>Java, React, MySQL</strong>, I'm actively expanding my skills in backend development, API integration, and secure application design. 
          I also have hands-on experience working with <strong>Git</strong> and <strong>GitHub</strong> for efficient version control and deployment.
        </p>
        <p>
          I'm deeply curious about how emerging technologies can solve real-world problems — especially using <strong>AI</strong> and secure web applications. 
          I'm currently exploring <strong>Adversarial Neural Networks</strong> and <strong>LLM Guardrails</strong> to improve the privacy and safety of intelligent systems.
        </p>
      </div>

      <Skills />

      {/* PROJECTS SECTION */}
      <div id="projects">
        <Projects />
      </div>

      <Resume />

      {/* CONTACT SECTION */}
      <div id="contact">
        <Contact />
      </div>
 

    </>
  );
}

export default App;
