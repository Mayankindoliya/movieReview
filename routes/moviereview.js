const express = require('express');

const router = express.Router();

const movieReviewControllers = require('../controllers/moviereview')

router.post('/rating', (req, res, next) => {
  movieReviewControllers.movieRating(req.user, req.body)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    next (err)
  })
});


module.exports = router;