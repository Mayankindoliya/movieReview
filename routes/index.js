const moviesreviewrouter = require('./moviereview');
const moviesrouter = require('./movies');
const usersrouter = require('./users');
 

module.exports = [
  require('./auth'),
  moviesreviewrouter,
  moviesrouter,
  usersrouter
];;
