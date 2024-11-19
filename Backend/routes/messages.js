const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/submit', async (req, res) => {
  try {
    const { nom, email, message } = req.body;
    
    const newMessage = new Message({
      nom,
      email,
      message
    });

    await newMessage.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Message envoyé avec succès' 
    });
  } catch (error) {
    console.error('Error submitting message:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi du message' 
    });
  }
});

module.exports = router;