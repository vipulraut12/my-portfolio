import React from 'react';
import './Skills.css';

const Skills = () => {
  const backendSkills = ['Java', 'Spring Boot', 'C#', '.NET Core', 'REST APIs'];
  const frontendSkills = ['React', 'Angular', 'JavaScript', 'HTML5 & CSS3'];
  const databaseTools = ['MySQL', 'Git'];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        
        <div className="skills-grid">
          {/* Backend Column */}
          <div className="skills-category">
            <h3>Backend Mastery</h3>
            <ul>
              {backendSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Frontend Column */}
          <div className="skills-category">
            <h3>Frontend & UI</h3>
            <ul>
              {frontendSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Databases & Tools */}
          <div className="skills-category">
            <h3>Databases & Tools</h3>
            <ul>
              {databaseTools.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;