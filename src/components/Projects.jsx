import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Cafe Billing System",
      description: "A full-stack application for managing cafe orders and billing. Built with Spring Boot for a robust backend and React for a dynamic user interface.",
      tech: ["Spring Boot", "React", "MySQL", "REST API"],
      link: "#" // Add your GitHub link here
    },
    {
      title: "Point of Sale (POS) System",
      description: "An enterprise-grade POS solution designed to handle retail logic, inventory tracking, and transaction management efficiently.",
      tech: ["Java", ".NET Core", "PostgreSQL", "React"],
      link: "#" // Add your GitHub link here
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <a href="https://github.com/vsraut" className="project-link" target="_blank" rel="noopener noreferrer">
                  View Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;