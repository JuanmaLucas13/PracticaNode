const express = require('express');
const {connect} = require('./src/utils/db');
const moviesRoutes = require('./src/api/routes/movies.route');
const cinemasRoutes = require('./src/api/routes/cinemas.route');

// defino puerto y genero el servidor http
const PORT = 5201;
const app = express();

//Me conecto a BBDd.
connect();

// configuro mi servidor con los routes, creados
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/movies', moviesRoutes);
app.use('/cinemas', cinemasRoutes);


//activo el servidor.
app.listen(PORT, () => {console.log('Servidor escuchando en:', PORT)})

