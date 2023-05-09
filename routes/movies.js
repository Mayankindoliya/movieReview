const express = require('express');

const router = express.Router();

const moviesControllers = require('../controllers/movies');

router.post('/registermovie', (req, res, next) => {
  moviesControllers.movieRegister(req.body)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});


module.exports = router;