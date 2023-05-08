const express = require('express');

const app = express();

const userrouter = require('./routes/users');
const authrouter = require('./routes/auth')

app.use(express.json());
app.use(userrouter);
app.use(authrouter);

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

