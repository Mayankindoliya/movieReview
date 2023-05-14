require('dotenv').config()

const express = require('express');

const app = express();

const userrouter = require('./routes/users');
const authrouter = require('./routes/auth');
const moviesrouter = require('./routes/movies');
const moviereviewrouter = require('./routes/moviereview')
const middlewares = require('./helpers/middlewares');

app.use(express.json());

// authentication middleware
app.use(middlewares.authenticationMiddleware);

app.use(userrouter);
app.use(authrouter);
app.use(moviesrouter);
app.use(moviereviewrouter)

//error handler
app.use((err, req, res, next) => {
  console.log(err)
  res.json({ "message": err.message, "stack": err.stack })
})


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database Connected")
    app.listen(3000, () => {
      console.log("Sever Is Ready (((!!!)))")
    })
  })
  .catch((err) => {
    console.log(err)
  });

