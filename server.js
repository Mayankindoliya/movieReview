require('dotenv').config()

const express = require('express');
const router = require('./routes');

const app = express();

 const middlewares = require('./helpers/middlewares');

app.use(express.json());

// authentication middleware
app.use(middlewares.authenticationMiddleware);

app.use(router);

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

