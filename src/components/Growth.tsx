import React from 'react';
import './Growth.css';

const learningItems = [
  'Advanced Cisco Certifications (CCNP, CCIE)',
  'Cybersecurity Fundamentals',
  'IoT Network Security'
];

const Growth: React.FC = () => {
  return (
    <section id="growth" className="growth">
      <h2>Growth Mindset</h2>
      <div className="growth-content">
        <h3>Currently Learning</h3>
        <ul className="learning-list">
          {learningItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Growth;