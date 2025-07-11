import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Enchanted Wings: Butterfly Species Classification',
      description: 'Developed a deep learning model to accurately classify butterfly species from images for ecological and biodiversity research.',
      link: 'https://github.com/phani-kumar-sajja/Enchanted-Wings'
    },
    {
      title: 'Secure Chatbot using OPTGPT',
      description: 'A secure LLM chatbot integrating Guardrails, LangChain, and Streamlit to prevent prompt injection.',
    }
  ];

  return (
    <div className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
