const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    data: Buffer,
    type: String,
  },
  articles: {},
});

module.exports = Author = mongoose.model("author", AuthorSchema);
