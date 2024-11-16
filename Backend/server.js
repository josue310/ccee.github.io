const path = require('path');
const express = require('express');
const app = express();

// Serve les fichiers statiques de React depuis le dossier 'dist'
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// Route par défaut pour envoyer l'application React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist', 'index.html'));
});

// Démarre le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
