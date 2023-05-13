const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieReviewSchema = new Schema({
  movie: {
    id: Schema.Types.ObjectId,
    name: String
  },
  user: {
    id: Schema.Types.ObjectId,
    name: String
  },

  review: String,
  rating: Number,
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }

  });

module.exports = mongoose.model('moviereview', movieReviewSchema);  
