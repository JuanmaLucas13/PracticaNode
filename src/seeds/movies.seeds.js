const mongoose = require('mongoose');

const Movie = require('../api/models/movies.models');

const arrayMovies = [
    {
       title: 'The Matrix',
       director: 'Hermanas Wachowski',
       year: 1999,
       genre: 'Acción',
    },
    {
       title: 'The Matrix Reloaded',
       director: 'Hermanas Wachowski',
       year: 2003,
       genre: 'Acción',
    },
    {
       title: 'Buscando a Nemo',
       director: 'Andrew Stanton',
       year: 2003,
       genre: 'Animación',
    },
    {
       title: 'Buscando a Dory',
       director: 'Andrew Stanton',
       year: 2016,
       genre: 'Animación',
    },
    {
       title: 'Interestelar',
       director: 'Christopher Nolan',
       year: 2014,
       genre: 'Ciencia ficción',
    },
    {
       title: '50 primeras citas',
       director: 'Peter Segal',
       year: 2004,
       genre: 'Comedia romántica',
    }
 ];

 mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allMovies = await Movie.find();
    if (allMovies.length > 0){
       await Movie.collection.drop();
       console.log('Peliculas borradas')
    }   
} )
.catch ( (error) => {'Error borrando peliculas ', error} )
.then ( async () => {
     const movieMap = arrayMovies.map((pelicula) => new Movie(pelicula));
     await Movie.insertMany(movieMap);
     console.log ('Peliculas insertadas');
})
.catch( (error) => {'Error insertando peliculas ', error} )
.finally ( () => mongoose.disconnect())
