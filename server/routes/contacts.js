const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (err) {
    console.error('Error submitting contact form:', err);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

module.exports = router;
