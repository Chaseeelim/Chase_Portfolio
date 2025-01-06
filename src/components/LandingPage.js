import React from 'react';
import '../styles/LandingPage.css'; 
import profileImage from '../assets/profile_picture.jfif';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from './footer/FooterX';


const LandingPage = () => {
  return (
    <div className="landing-page">
  
      <Navbar />
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <img src={profileImage} alt="Not Found" />
          <h1>Hi, I'm Chase Lim</h1>
          <p className="subtitle">
            Aspiring Software Engineer | Aspiring Software Developer | Problem Solver
          </p>
          <p className="description">
            I aspire to build scalable and efficient software solutions with a passion for clean, maintainable, efficient code.
          </p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn primary-btn">See My Projects</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn secondary-btn">Download Resume</a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/Chaseeelim" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/chase-lim-shi-you-874332204/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:chaselim96@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </header>

      <Footer />
    </div>
  );
};

export default LandingPage;
