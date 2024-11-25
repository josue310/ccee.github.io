// config/database.js

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connecté : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erreur de connexion à MongoDB : ${error.message}`);
    process.exit(1); // Arrêter l'application si la connexion échoue
  }
};

module.exports = connectDB;
