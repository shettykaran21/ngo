const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', postSchema);
