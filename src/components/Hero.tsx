import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>I am a network technician passionate about building, securing, and future-proofing network systems.</h1>
        </div>
        <div className="hero-image">
          <img src="/prof.jpg" alt="Profile Picture" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;