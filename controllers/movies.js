const Movies = require('../models/movies');

class moviesControllers {

static async movieRegister(document){
const movies = await Movies.create(document)
return movies 
};



};

module.exports = moviesControllers;  

