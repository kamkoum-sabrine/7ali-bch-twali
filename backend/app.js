const express = require('express');
const app = express();

// Définir une route d'accueil
app.get('/', (req, res) => {
    res.send('Bonjour, monde!');
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
