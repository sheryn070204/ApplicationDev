import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <p><strong>✉Email:</strong> <a href="mailto:your.email@example.com">sheryn.cuabo@gmail.com</a></p>
        <p><strong>✪LinkedIn:</strong> <a href="https://linkedinsheryncuabo.com/in/yourprofile" target="_blank" rel="noopener noreferrer">sheryncuabolinkedin.com/in/yourprofile</a></p>
      </div>
    </section>
  );
};

export default Contact;