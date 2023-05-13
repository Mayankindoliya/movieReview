const express = require('express');

const app = express();

const userrouter = require('./routes/users');
const authrouter = require('./routes/auth');
const moviesrouter = require('./routes/movies');
const moviereviewrouter = require('./routes/moviereview')
const jwt = require('./helpers/jwt')
const Users = require('./models/users')

app.use(express.json());

// authentication middleware
app.use(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if(authHeader) {
    // verify the token
    const token = authHeader.split(' ')[1];
    const payload = jwt.verifyJwt(token);
    const user = await Users.findOne({_id: payload.id}, 'name email address')
    req.user = user;
  }
  next()
})

app.use(userrouter);
app.use(authrouter);
app.use(moviesrouter);
app.use(moviereviewrouter)

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

