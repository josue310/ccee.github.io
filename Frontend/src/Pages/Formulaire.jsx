import React, { useState } from 'react';
// Importation des images nécessaires pour l'interface
import Affiche10Ans from '../assets/Images/Affiche10Ans.jpg';
import LogoCCEE from '../assets/Images/logo_ccee.png';

function Formulaire() {
  // Utilisation de useState pour gérer les données du formulaire (nom, email, message)
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  // Fonction pour mettre à jour les champs du formulaire lorsqu'il y a une modification
  const handleChange = (e) => {
    const { name, value } = e.target;  // Récupère le nom et la valeur du champ modifié
    setFormData(prevState => ({
      ...prevState,
      [name]: value  // Met à jour l'état en fonction du champ modifié
    }));
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();  // Empêche le rechargement de la page après la soumission du formulaire
    // Affiche une alerte indiquant que le formulaire a été soumis (pas de backend ici)
    alert('Formulaire soumis');
    // Réinitialisation des champs du formulaire après soumission
    setFormData({ nom: '', email: '', message: '' });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      {/* Conteneur du formulaire et de l'image */}
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg max-w-4xl w-full">
        
        {/* Section de l'image à gauche */}
        <div className="md:w-1/2 p-4">
          <img
            src={Affiche10Ans}  
            alt="Affiche 10 ans"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        {/* Section du formulaire à droite */}
        <div className="md:w-1/2 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-green-600">Formulaire</h2>
          
           {/* Message d'introduction avec le logo */}
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 flex items-center">
            <img src={LogoCCEE} alt="Logo CCEE" className="w-6 h-6 mr-2" />
            <p>Nous invitons chaleureusement nos invité(e)s à participer à ce formulaire.</p>
          </div>

          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nom" className="block text-green-600 font-bold mb-2">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"  // Nom du champ utilisé dans l'état
                value={formData.nom}  // Valeur actuelle du champ "nom"
                onChange={handleChange}  // Met à jour l'état lorsque l'utilisateur saisit quelque chose
                className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-green-600 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"  // Nom du champ utilisé dans l'état
                value={formData.email}  // Valeur actuelle du champ "email"
                onChange={handleChange}  // Met à jour l'état lorsque l'utilisateur saisit quelque chose
                className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-green-600 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"  // Nom du champ utilisé dans l'état
                value={formData.message}  // Valeur actuelle du champ "message"
                onChange={handleChange}  // Met à jour l'état lorsque l'utilisateur saisit quelque chose
                rows={4}  // Nombre de lignes visibles pour le texte
                className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            {/* Bouton pour soumettre le formulaire */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
