const express = require("express");
const router = express.Router();

// Article Model
const Article = require("../../models/Article");

// @route GET api/articles
// @desc Get All Articles
// @access Public
router.get("/api/articles/", (req, res) => {
  Article.find()
    .sort({ date: -1 })
    .then((articles) => res.json(articles));
});

router.get("/api/articles/:id", (req, res) => {
  Article.findById(req.params.id).then((article) => res.json(article));
});

// @route POST api/articles
// @desc Create A ARticle
// @access Public
router.post("/api/articles/", (req, res) => {
  const newArticle = new Article({
    name: req.body.name,
    author: req.body.author,
    body: req.body.body,
  });

  newArticle.save().then((article) => res.json(article));
});

// @route DELETE api/articles/:id
// @desc DELETE A ARticle
// @access Public
router.delete("/api/articles/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => article.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ sucess: false }));
});

module.exports = router;
