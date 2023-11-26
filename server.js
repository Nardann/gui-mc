const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint pour sauvegarder la configuration
app.post('/saveConfig', (req, res) => {
  // Implémente la logique pour sauvegarder la configuration
  console.log(req.body);
  res.status(200).send('Configuration sauvegardée avec succès.');
});

// Endpoint pour charger la configuration
app.get('/loadConfig', (req, res) => {
  // Implémente la logique pour charger la configuration
  const config = {}; // Remplace cela par la logique de chargement réelle
  res.status(200).json(config);
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
