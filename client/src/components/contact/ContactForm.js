import React, { useState } from 'react';
import Planet from './Planet';
import './ContactForm.css'; // Import your custom styles for the form

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contacts/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Form submission response:', data);
      // Optionally, reset form data after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <div className="left-align">
          <p><span className="purple">GET IN TOUCH 🚀</span></p>
          <h1><strong><span className="purple">Contact. </span></strong></h1>
          <p>.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="purple"><strong>Name:</strong></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="purple"><strong>Email:</strong></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="What's your email?"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="purple"><strong>Message:</strong></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="What do you want to say?"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit"><strong>Send</strong></button>
        </form>
        <div id="responseMessage"></div>
      </div>
      <div className="planet-container">
        <Planet />
      </div>
    </div>
  );
};

export default ContactForm;
