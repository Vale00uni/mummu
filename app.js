const express = require('express');
const path = require('path');
const homeRoutes = require('./routes/homeRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Imposta la cartella 'public' per servire file statici
app.use(express.static(path.join(__dirname, 'public')));
console.log(`Serving static files from: ${path.join(__dirname, 'public')}`);


// Usa le route
app.use('/', homeRoutes);
  

// Avvia il server sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});




  