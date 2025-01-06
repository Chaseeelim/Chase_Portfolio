import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from './footer/FooterX';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-page">
      <Navbar />

      {/* Main Content */}
      <main className="about-me-content">
        <section id="about" className="intro-section">
          <h1>About Me</h1>
          <p>
            I am an aspiring Software Engineer specializing in building end-to-end applications. With expertise in both server-side and client-side technologies, I am passionate about creating efficient, scalable, and impactful software solutions that address real-world challenges.
          </p>
        </section>

        <section id="technologies" className="technologies-section">
          <h2>Technologies</h2>
          <p>
            JavaScript (ES6+), React, HTML5, CSS3, Java, Python, PHP, SQL, Bootstrap, Vue.js, Spring Boot, AWS services, Docker
          </p>
        </section>

        <section id="education" className="education-section">
          <h2>Education</h2>
          <p>BSc in Software Engineering from Singapore Management University (SMU)</p>
          <p>Diploma in Hospitality & Tourism Management (TP)</p>
          <p>Events Management in ITE College Central (ITE)</p>

        </section>

        <section id="achievements" className="achievements-section">
          <h2>Achievements</h2>
          <ul className="achievements-list">
            <li>
              <strong className="achievement-title">Dato' Kho Hui Meng Scholarship Scholar 2022 to 2024 - SMU</strong>
              <p className="achievement-description">
              the Dato' Kho Hui Meng Scholarship is available to first year full-time undergraduates pursuing any degree programme at the Singapore Management University. 
              </p>
            </li>
            <li>
              <strong className="achievement-title">Tay Eng Soon Gold Medal 2022 - TP</strong>
              <p className="achievement-description">
                Awarded annually to one outstanding graduate from each polytechnic, who graduated from the Institute of Technical Education (ITE) prior to their studies at the polytechnic.
              </p>
            </li>
            <li>
              <strong className="achievement-title">Four Seasons Hotel Singapore Course Gold Medal 2022 - TP</strong>
              <p className="achievement-description">
                Awarded to the top student of the course.
              </p>
            </li>
            <li>
              <strong className="achievement-title">Edusave Skills Award 2022 - TP</strong>
              <p className="achievement-description">
                Given to no more than 10% of students who demonstrated excellent professional and soft skills throughout their course of study and good conduct.
              </p>
            </li>
            <li>
              <strong className="achievement-title">Edusave Certificate of Academic Achievement 2022 - TP</strong>
              <p className="achievement-description">
                For being in the top 25% in terms of academic performance and demonstrating good conduct in school.
              </p>
            </li>
            <li>
              <strong className="achievement-title">Temasek Polytechnic Director's List AY 2019/2020 Semester - TP</strong>
              <p className="achievement-description">
                Named to the Director's List for achieving top academic results during the semester.
              </p>
            </li>
            <li>
              <strong className="achievement-title">Edusave Certificate of Academic Achievement 2016 - ITE</strong>
              <p className="achievement-description">
                For achieving good academic performance and demonstrating good conduct.
              </p>
            </li>
          </ul>
        </section>

        <section id="national-service" className="national-service-section">
          <h2>National Service</h2>
          <ul className="service-list">
            <li>
              <strong className="service-title">Naval Diver</strong>
              <p className="service-description">
                Successfully completed the rigorous Naval Diving Unit (NDU) training, demonstrating physical resilience, mental toughness, and teamwork in high-pressure situations.
              </p>
            </li>
          </ul>
        </section>

        <section id="boxing" className="boxing-experience-section">
          <h2>Boxing Experience</h2>
          <ul>
            <li>
              <strong className="boxing-title">Boxing Coach</strong>
              <p className="boxing-description">
                Conducted group boxing classes focusing on refining technique, building fitness, and maintaining safety. Designed personalized training plans to cater to diverse skill levels.
              </p>
            </li>
            <li>
              <strong className="boxing-title">Boxing Athlete</strong>
              <p className="boxing-description">
                Competed in 12 amateur boxing competitions and honed skills through rigorous training. Demonstrated discipline, resilience, and a strong commitment to personal growth.
              </p>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutMe;
