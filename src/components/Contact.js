import React, { useState } from 'react';
import '../styles/Contact.css'; // Importing the CSS file
import Navbar from '../components/navbar/Navbar';
import Footer from './footer/FooterX';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send form data to the backend
    fetch('http://localhost:8080/api/contact/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to send the message.');
    });
  };

  return (
    <section className="contact">
      <Navbar />
      <h2>Contact Me</h2>
      <p>
        I'd love to hear from you! Whether it's about potential collaborations or just to say hi, feel free to drop me a message.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5" 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn submit-btn">Send Message</button>
      </form>
      <Footer />
    </section>
  );
};

export default Contact;
