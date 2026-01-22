import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'What I Know',
    description: 'Proficient in network infrastructure setup, troubleshooting, and maintenance. Skilled in routing, switching, and basic cybersecurity protocols.',
    technologies: ['Cisco IOS', 'TCP/IP', 'Wireshark', 'Firewall Configuration']
  },
  {
    title: 'What I Learned',
    description: 'Recently expanded knowledge in cloud networking, automation scripts, and advanced security measures through certifications and hands-on projects.',
    technologies: ['AWS Networking', 'Python Scripting', 'VPN Setup', 'Network Monitoring']
  },
  {
    title: 'What I\'m Aspiring To',
    description: 'Aiming to master SDN, AI-driven network management, and zero-trust architectures to stay ahead in the evolving tech landscape.',
    technologies: ['Software-Defined Networking', 'Machine Learning', 'Kubernetes', 'Blockchain Security']
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>Growth Through Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;