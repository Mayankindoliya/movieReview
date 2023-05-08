const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema ({
   name: String,
   email: String,
   username: String,
   password: String,
   phoneno: Number,
   address: String,
   dob: String,
   created_at: Date,
   updated_at: Date
});


module.exports = mongoose.model('users', usersSchema);