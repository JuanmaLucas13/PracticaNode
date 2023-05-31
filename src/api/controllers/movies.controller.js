const Movie = require('../models/movies.model');

const getMovies = async (req, res) => {
   try {
      const allMovies = await Movie.find();
      if (allMovies.length == 0)
         return res.status(404).json({message:"No hay peliculas informadas."});   
    
      return res.status(200).json(allMovies);   
   } catch (error) {
     return res.status(500).json(error);
   }
}

const getMovies2010 = async (req, res) => {
   try {
      const allMovies = await Movie.find({year : {$gt:2010} });
      if (allMovies.length == 0)
         return res.status(404).json({message:"No hay peliculas estrenada despues del 2010 inclusive"});

      return res.status(200).json(allMovies);

    
   } catch (error) {
     return res.status(500).json(error);
   }
}

const getMoviesbyGenre = async (req, res) => {
    try {
       const allMovies = await Movie.find().sort('genre');
       if (allMovies.length == 0)
          return res.status(404).json({message:"No hay peliculas informadas"});
 
       return res.status(200).json(allMovies);
 
     
    } catch (error) {
      return res.status(500).json(error);
    }
 }
 
 const getMoviesbyId = async (req, res) => {
    try {
        const {id} = req.params;
        const findMovie = await Movie.findById(id);
        if (!findMovie)
           return res.status(404).json({message:"No hay pelicula con el id indicado"});
  
        return res.status(200).json(findMovie);
  
      
     } catch (error) {
       return res.status(500).json(error);
     }
  }
 
 const getMoviesbyTitle = async (req, res) => {
    try {
       const {title} = req.params;
       const findMovie = await Movie.find({title: `${title}` });
       if (!findMovie)
          return res.status(404).json({message:"No hay pelicula con el titulo indicado"});
 
       return res.status(200).json(findMovie);
 
     
    } catch (error) {
      return res.status(500).json(error);
    }
 }

const postMovies = async (req, res) => {
   try {
      const newMovie = new Movie(req.body);

      //el metodo save nos sirve para guardar un elemento en BBDD
      const createdMovie = await newMovie.save();  

      return res.status(201).json(createdMovie);

   } catch (error) {
       return res.status(500).json(error);
   }
}; 

const putMovies = async (req, res) =>  {
   try {
       const {id} = req.params;
       const putMovie = new Movie(req.body);
       putMovie._id = id;

       const updatedMovie = await Movie.findByIdAndUpdate(id, putMovie, {new: true});
       if(!updatedMovie){
           return res.status(404).json({message: 'No tenemos peliculas con ese ID'}); 
        }
       return res.status(200).json(updatedMovie);
   } catch (error) {
       return res.status(500).json(error);
   }
};

const deleteMovies = async (req, res) =>  {
   try {
       const {id} = req.params;
       const deleteMovie = await Movie.findByIdAndDelete(id);

       if(!deleteMovie){
           return res.status(404).json({message: 'No tenemos peliculas con ese ID'}); 
        }

        return res.status(200).json(deleteMovie);
   } catch (error) {
       return res.status(500).json(error);
   }
};

module.exports = {getMovies, getMovies2010, getMoviesbyGenre, getMoviesbyId, 
   getMoviesbyTitle, postMovies, putMovies, deleteMovies}