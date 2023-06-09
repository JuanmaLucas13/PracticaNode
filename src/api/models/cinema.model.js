const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cinemaSchema = new Schema (
   {
     name: {type: String, required: true},
     location: {type: String, required: true},
     peliculas: [{type: Schema.Types.ObjectId, ref: 'movies'} ]
   },
   {
    timestamps: true
   }
)

const Cinema = mongoose.model('cinemas', cinemaSchema);

module.exports = Cinema;
