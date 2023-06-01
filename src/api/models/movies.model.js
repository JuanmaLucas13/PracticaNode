const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
   {
    title: {type: String, require: true},
    director: {type: String, require: true},
    year: {type: Number, require: true},
    genre: {type: String, require: true},
    imagen: {type: String}
   },
   {
    timestamps: true
   }
)

const movie = mongoose.model('movies', movieSchema);
module.exports = movie;
