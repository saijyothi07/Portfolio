// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        <FaEnvelope style={{ marginRight: "8px" }} />
        <a href="mailto:psaij614@gmail.com" className="email-link">
          psaij614@gmail.com
        </a>
      </p>

      <div className="social-icons">
        <a href="https://github.com/saijyothi07" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/pulakunta-sai-jyothi-3a9266280/" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
