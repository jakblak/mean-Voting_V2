const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./../User/User.model');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  author: User.schema,
  // author: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // },

  categories: [
  {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }]
});

module.exports = mongoose.model('Post', PostSchema);