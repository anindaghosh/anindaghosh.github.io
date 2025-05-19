import React from 'react';

function SkillsSection({ skills }) {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level-text">{skill.level}/10</span>
            </div>
            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{ width: `${(skill.level / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
