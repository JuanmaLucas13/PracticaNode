const express = require('express');
const {getCinema, postCinema, putCinema, deleteCinema} = require('../controllers/cinema.controller');

//Creo los routes para contolar las invocaciones al servidor
const cinemasRoutes = express.Router();

// routes por operacion.
cinemasRoutes.get('/', getCinema);
cinemasRoutes.post('/', postCinema);
cinemasRoutes.put('/:id', putCinema);
cinemasRoutes.delete('/:id', deleteCinema);

//Exporto los routes, para el app.use.
module.exports = cinemasRoutes;