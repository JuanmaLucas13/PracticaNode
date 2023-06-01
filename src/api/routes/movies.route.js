const express = require('express');
const {getMovies, getMovies2010, getMoviesbyGenre, getMoviesbyId, getMoviesbyTitle, postMovies, putMovies, deleteMovies} = require('../controllers/movies.controller');
// const {pruebaMiddleware} = require('../../middelware/auth');
const upload = require('../../middleware/upload.file');

//Creo los routes para contolar las invocaciones al servidor
const moviesRoutes = express.Router();

//routes por operacion
moviesRoutes.get('/year/', getMovies2010);
moviesRoutes.get('/genre/', getMoviesbyGenre);
moviesRoutes.get('/',  getMovies);
moviesRoutes.get('/id/:id', getMoviesbyId);
moviesRoutes.get('/title/:title', getMoviesbyTitle);

moviesRoutes.post('/', upload.single('imagen'), postMovies);
moviesRoutes.put('/:id', putMovies);
moviesRoutes.delete('/:id', deleteMovies);

//Exporto los routes, para el app.use.
module.exports = moviesRoutes;

