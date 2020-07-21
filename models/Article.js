const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const ArticleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  preview: {
    type: String,
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "articles",
    // required: true,
  },
});

module.exports = Article = mongoose.model("article", ArticleSchema);
