const express = require('express');

const app = express();

const userrouter = require('./routes/users');
const authrouter = require('./routes/auth');
const moviesrouter = require('./routes/movies');

app.use(express.json());
app.use(userrouter);
app.use(authrouter);
app.use(moviesrouter);

//error handler
app.use((err, req, res, next) => {
  console.log(err)
  res.json({"message": err.message, "stack": err.stack})
})


const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mayankindoliya:kiana@cluster0.mfofsan.mongodb.net/movieReview?retryWrites=true&w=majority")
  .then(() => {
    console.log("Database Connected")
    app.listen(3000, () => {
      console.log("Sever Is Ready (((!!!)))")
    })
  })
  .catch((err) => {
    console.log(err)
  });

