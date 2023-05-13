const MovieReview = require('../models/moviereviews')

class movieReviewControllers {

static async movieRating(document){
 const moviereview = await MovieReview.create(document)
 return moviereview 
}

};

module.exports = movieReviewControllers;