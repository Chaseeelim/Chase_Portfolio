import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
  <footer className="footer">
  <div className="footer-container">
    <p>&copy; 2024 Chase Lim. All rights reserved.</p>
    <div className="social-icons">
      <a href="https://github.com/Chaseeelim" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/chase-lim-shi-you-874332204/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
