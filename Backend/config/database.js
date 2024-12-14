const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://habibrolandt:6KwjDvVjbu2W4bzO@cluster0.gpbc4.mongodb.net/ProjetCCEE?retryWrites=true&w=majority&appName=Cluster0'
// Fonction de connexion à MongoDB
const connectDB = async () => {
  try {
    // Connexion à MongoDB avec l'URI d'environnement
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB connecté : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erreur de connexion à MongoDB : ${error.message}`);
    process.exit(1);  // Arrêt du processus en cas d'erreur de connexion
  }
};

module.exports = connectDB;
