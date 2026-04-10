import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">VR</div>
        
        <div className="footer-socials">
          <a href="https://github.com/vsraut" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vipul-suresh-raut-a40b0a197/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>

        <p className="footer-copyright">
          © {currentYear} Vipul Suresh Raut. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;