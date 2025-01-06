import React, { useState } from 'react';
import '../styles/Projects.css';
import Navbar from '../components/navbar/Navbar';
import Footer from './footer/FooterX';
import ascendasImage from '../assets/ascendas.jpg';
import migrantPal from '../assets/migrantpal.png';
import jabHookUppercut from '../assets/jabhookuppercut.png';
import hotWings from '../assets/hotwings.jpg';
import ecoApp from '../assets/ecoApp.jpg';
import ptBookingApp from '../assets/ptbookingapp.png';
import tournamentApp from '../assets/tournamentApp.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: 'Personal Training Booking App',
      description: 'Created for personal clients to book boxing training sessions with me easily',
      skills: 'Javascript, GCB, Vercel',
      image: ptBookingApp,
      link: 'https://pt-booking-app.vercel.app/'
    },
    {
      title: 'Tennis Tournament Management App',
      description: 'Co-Developed an web app to simulate schedulding tournaments for tennis players',
      skills: 'Java Spring Boot, AWS, Vercel',
      image: tournamentApp,
      link: 'https://pt-booking-app.vercel.app/'
    },
    {
      title: 'MigrantPals',
      description: 'A Telegram chatbot designed to educate and assist migrant workers in Singapore. Conducted on-site guidance sessions at dormitories.',
      skills: 'ChatGPT API, DialogueFlow',
      image: migrantPal,
      link: 'https://t.me/MigrantPalBot'
    },
    {
      title: 'Ascendas Admin System',
      description: 'Collaborated on an app for managing administrative tasks. Backend and frontend system built with Java and AWS.',
      skills: 'Java, AWS (Lambda, DynamoDB, EC2, ElastiCache), PostgreSQL, Docker, Microservices Architecture',
      image: ascendasImage,
      link: 'https://github.com/cs301-itsa/project-2023-24T2-g1-t3-frontend.git'
    },
    {
      title: 'Jab-Uppercuts-Hooks (Web Game)',
      description: 'A fun rock-paper-scissors-style boxing game to learn about boxing techniques.',
      skills: 'JavaScript, HTML, CSS',
      image: jabHookUppercut,
      link: 'https://jab-hook-uppercut.vercel.app/'
    },
    {
      title: 'HotWings-Air',
      description: 'A flight booking simulation web application for an airline.',
      skills: 'Java, Python, HTML, CSS, Docker, Microservices Architecture',
      image: hotWings,
      link: 'https://github.com/Jerric1801/hotwings-air.git'
    },
    {
      title: 'Eco-Friendly Web Application',
      description: 'An educational platform to learn eco-friendly habits and earn points for prizes.',
      skills: 'JavaScript, HTML, CSS',
      image: ecoApp,
      link: 'https://github.com/havee-eh/IS216-WADII.git'
    }
  ];

  return (
    <section className="projects">
      <Navbar />

      <h2>My Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="skills">{project.skills}</span>
            
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="project-button">View Project</button>
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <p><strong>Technologies:</strong> {selectedProject.skills}</p>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
};

export default Projects;
