// src/components/Resume.js
import React from 'react';
import './Resume.css';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="resume-section" id="resume">
      <h2>My Resume</h2>
      <p>You can view or download my resume using the button below.</p>
      <a href="/resume1.pdf" download className="download-btn">
        <FaDownload style={{ marginRight: '8px' }} />
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
