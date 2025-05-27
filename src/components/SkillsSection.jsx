import React, { useState } from 'react';
import {
  FaPython,
  FaReact,
  FaAws,
  FaDatabase,
  FaCode,
  FaCloud,
  FaChartBar,
  FaJava,
  FaJs,
} from 'react-icons/fa';
import {
  SiTensorflow,
  SiPytorch,
  SiDjango,
  SiFlask,
  SiTerraform,
  SiPostgresql,
  SiMongodb,
  SiTableau,
  SiExpress,
  SiKeras,
  SiSnyk,
  SiSonarcloud,
  SiPytest,
  SiJest,
  SiCypress,
  SiDatadog,
  SiFigma,
  SiK6,
  SiCheckmarx,
  SiGooglecloud,
} from 'react-icons/si';
import { VscAzure, VscAzureDevops } from 'react-icons/vsc';

function SkillsSection({ skills }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Define category colors
  const categoryColors = {
    'Core Languages': '#e74c3c',
    'Web & Frameworks': '#3498db',
    'Cloud & DevOps': '#b5f312',
    'Security Tools': '#9b59b6',
    'Data & Analytics': '#27ae60',
    'Machine Learning': '#e67e22',
    'Testing & Monitoring': '#34495e',
    Design: '#f1c40f',
  };

  const getSkillIcon = (skillName) => {
    const iconMap = {
      // Core Languages
      Python: <FaPython />,
      JavaScript: <FaJs />,
      Java: <FaJava />,
      SQL: <FaDatabase />,

      // Web & Frameworks
      React: <FaReact />,
      Flask: <SiFlask />,
      'Express.js': <SiExpress />,
      Django: <SiDjango />,

      // Cloud & DevOps
      'Microsoft Azure': <VscAzure />,
      'AWS Cloud': <FaAws />,
      'Google Cloud': <SiGooglecloud />,
      Terraform: <SiTerraform />,
      'Azure DevOps': <VscAzureDevops />,

      // Security Tools
      Snyk: <SiSnyk />,
      Checkmarx: <SiCheckmarx />,
      SonarCloud: <SiSonarcloud />,
      Apiiro: <FaCode />,

      // Data & Analytics
      PostgreSQL: <SiPostgresql />,
      Mongo: <SiMongodb />,
      PowerBI: <FaChartBar />,
      Tableau: <SiTableau />,

      // Machine Learning
      Tensorflow: <SiTensorflow />,
      Keras: <SiKeras />,
      PyTorch: <SiPytorch />,

      // Testing & Monitoring
      Pytest: <SiPytest />,
      Jest: <SiJest />,
      Cypress: <SiCypress />,
      Locust: <FaCode />,
      K6: <SiK6 />,
      Datadog: <SiDatadog />,

      // Design
      Figma: <SiFigma />,
    };

    return iconMap[skillName] || <FaCode />;
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        <span className="section-icon">⚡️</span>
        Skills
      </h2>

      {/* Category Legend */}
      <div className="skills-legend">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="legend-item">
            <div
              className="legend-color"
              style={{ backgroundColor: color }}
            ></div>
            <span className="legend-text">{category}</span>
          </div>
        ))}
      </div>

      {/* Skills Matrix */}
      <div className="skills-matrix">
        {skills.map((skillGroup) =>
          skillGroup.skills.map((skill, skillIndex) => (
            <div
              key={`${skillGroup.group}-${skillIndex}`}
              className="skill-icon-container"
              style={{
                '--category-color':
                  categoryColors[skillGroup.group] || '#95a5a6',
              }}
              onMouseEnter={() =>
                setHoveredSkill({ skill, category: skillGroup.group })
              }
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-icon-wrapper">{getSkillIcon(skill)}</div>

              {/* Tooltip */}
              {hoveredSkill?.skill === skill && (
                <div className="skill-tooltip">
                  <div className="tooltip-skill">{skill}</div>
                  <div className="tooltip-category">{skillGroup.group}</div>
                </div>
              )}
            </div>
          )),
        )}
      </div>
    </section>
  );
}

export default SkillsSection;
