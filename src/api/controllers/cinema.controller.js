const Cinema = require('../models/cinema.model');

const getCinema = async (req, res) => {
    try {
        // const allCinemas = await Cinema.find().populate("movies");
        const allCinemas = await Cinema.find().populate({path: 'movies', select: 'title director'});
        if (allCinemas.length == 0)
           return res.status(404).json({message:"No hay cines informados."});   
      
        return res.status(200).json(allCinemas);   
     } catch (error) {
       return res.status(500).json(error);
     }
}

const postCinema = async (req, res) => {
    try {
        const newCinema = new Cinema(req.body);
  
        //el metodo save nos sirve para guardar un elemento en BBDD
        const createdCinema = await newCinema.save();  
  
        return res.status(201).json(createdCinema);
  
     } catch (error) {
         return res.status(500).json(error);
     }
}

const putCinema = async (req, res) => {
    try {
        const {id} = req.params;
        const putCinema = new Cinema(req.body);
        putCinema._id = id;
 
        const updatedCinema = await Cinema.findByIdAndUpdate(id, putCinema, {new: true});
        if(!updatedCinema){
            return res.status(404).json({message: 'No tenemos cines con ese ID'}); 
         }
        return res.status(200).json(updatedCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}


const deleteCinema = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteCinema = await Cinema.findByIdAndDelete(id);
 
        if(!deleteCinema){
            return res.status(404).json({message: 'No tenemos cines con ese ID'}); 
         }
 
         return res.status(200).json(deleteCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {getCinema, postCinema, putCinema, deleteCinema}