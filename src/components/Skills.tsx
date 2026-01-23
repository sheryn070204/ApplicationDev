import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 'fundamentals',
      category: 'Core Networking',
      icon: '🔗',
      skills: [
        'OSI Model & TCP/IP Protocols',
        'IP Addressing & Subnetting',
        'Routing & Switching Basics',
        'VLAN Configuration & Management'
      ]
    },
    {
      id: 'devices',
      category: 'Device Configuration',
      icon: '⚙️',
      skills: [
        'Cisco Router & Switch Setup',
        'Device Backup & Restoration',
        'Firmware Updates & Patches',
        'Basic Interface Configuration'
      ]
    },
    {
      id: 'troubleshooting',
      category: 'Troubleshooting & Monitoring',
      icon: '🔍',
      skills: [
        'Network Connectivity Issues',
        'Packet Capture & Analysis (Wireshark)',
        'Performance Monitoring',
        'Cable Testing & Verification'
      ]
    },
    {
      id: 'security',
      category: 'Security & Access Control',
      icon: '🔐',
      skills: [
        'Access Control Lists (ACLs)',
        'Firewall Rules & Policies',
        'User Authentication Setup',
        'Network Segmentation Basics'
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Technical Skills</h2>
          <p className="skills-subtitle">Network Technician - Entry-level hands-on experience</p>
        </div>
        
        <div className="skills-layout">
          <div className="skills-col skills-col-1">
            {skillCategories.slice(0, 2).map((category) => (
              <div key={category.id} className="skill-block">
                <div className="skill-block-header">
                  <span className="skill-icon">{category.icon}</span>
                  <h3>{category.category}</h3>
                </div>
                <ul className="skill-items">
                  {category.skills.map((skill, idx) => (
                    <li key={idx}>
                      <span className="bullet">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="skills-col skills-col-2">
            {skillCategories.slice(2).map((category) => (
              <div key={category.id} className="skill-block">
                <div className="skill-block-header">
                  <span className="skill-icon">{category.icon}</span>
                  <h3>{category.category}</h3>
                </div>
                <ul className="skill-items">
                  {category.skills.map((skill, idx) => (
                    <li key={idx}>
                      <span className="bullet">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
