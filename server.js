// server.js

const path = require('path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./Backend/config/database');
const messageRoutes = require('./Backend/routes/messages');

const app = express();

// Connexion à MongoDB
connectDB();

// Middleware
// Décommentez et ajustez la ligne ci-dessous si vous souhaitez limiter l'accès à votre API à un domaine spécifique (par exemple, votre frontend en développement)
app.use(cors({
  // origin: 'http://192.168.1.162:3000', // Remplacez par l'IP ou le nom de domaine de votre frontend
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes API
app.use('/api/messages', messageRoutes);

// Serve les fichiers statiques de React build
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// Gérer le routage React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
