import React, { useState } from 'react';
import './Skills.css';

const Skills = ({ hardSkills, softSkills }) => {
  const [activeTab, setActiveTab] = useState('hard');

  const skillsToShow = activeTab === 'hard' ? hardSkills : softSkills;

  return (
    <section className="skills-section">
      <div className="stars"></div>

      <h2> Minhas Skills</h2>

      <div className="tabs">
        <button
          className={activeTab === 'hard' ? 'active' : ''}
          onClick={() => setActiveTab('hard')}
        >
          Hard Skills
        </button>
        <button
          className={activeTab === 'soft' ? 'active' : ''}
          onClick={() => setActiveTab('soft')}
        >
          Soft Skills
        </button>
      </div>

      <div className={`skills-slider ${activeTab}`}>
        {skillsToShow.map((skill) => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
