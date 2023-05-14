const MovieReview = require('../models/moviereviews')

class movieReviewControllers {

static async movieRating(user, document){
  if(!user){
    throw new Error("user not Present")
  }
 document.user = user
 const moviereview = await MovieReview.create(document)
 return moviereview 
}

};

module.exports = movieReviewControllers;