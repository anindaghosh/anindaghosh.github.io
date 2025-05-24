import React from 'react';
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
      Terraform: <SiTerraform />,
      'Azure DevOps': <VscAzureDevops />,
      'Google Cloud': <SiGooglecloud />,

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

    return iconMap[skillName] || <FaCode />; // Default icon if not found
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        <span className="section-icon">⚡️</span>
        Skills
      </h2>

      <div className="skills-groups-container">
        {skills.map((skillGroup, groupIndex) => (
          <div key={groupIndex} className="skill-group">
            <h3 className="skill-group-title">{skillGroup.group}</h3>
            <div className="skills-container">
              {skillGroup.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-pill">
                  <span className="skill-icon">{getSkillIcon(skill)}</span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
