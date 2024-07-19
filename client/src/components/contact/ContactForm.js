import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Planet from './Planet';
import './ContactForm.css'; // Import your custom styles for the form

const ContactForm = () => {
  const [formData, setFormData] = useState({
    to_name: 'Recipient', // Replace with the actual recipient name if needed
    from_name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceID = 'service_z4dddel';
    const templateID = 'template_dx2utqk'; // Correct template ID
    const userID = 'q3jhdGwcum9rzK8Xz';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setFormData({ to_name: 'Recipient', from_name: '', email: '', message: '' });
        setResponseMessage('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setResponseMessage('Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <p><span className="purple">GET IN TOUCH 🚀</span></p>
        <h1 className="title">Contact.</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="from_name" className="purple"><strong>Name :</strong></label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="What's your name?"
              value={formData.from_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="purple"><strong>Email :</strong></label>
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
            <label htmlFor="message" className="purple"><strong>Message :</strong></label>
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
      </div>
      <div className="planet-container">
        <div id="responseMessage">{responseMessage}</div> {/* Response message */}
        <Planet />
      </div>
    </div>
  );
};

export default ContactForm;
