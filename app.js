const express = require('express');
const app = express();
const port = 3000;

// Gestisce una richiesta GET alla root ("/")
app.get('/', (req, res) => {
    res.render('index', { message: 'Ciao, mondo con EJS!' });
  });
  

// Avvia il server sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});

app.get('/about', (req, res) => {
    res.send('Questa è la pagina About.');
  });

app.set('view engine', 'ejs');

  