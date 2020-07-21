const express = require("express");
const router = express.Router();

const Article = require("../../models/Article");

router.get("/api/articles/", (req, res) => {
  Article.find()
    .sort({ date: -1 })
    .then((articles) => res.json(articles));
});

router.get("/api/articles/:id", (req, res) => {
  Article.findById(req.params.id).then((article) => res.json(article));
});

router.post("/api/articles/:id", (req, res) => {
  const newArticle = new Article({
    name: req.body.name,
    author: req.body.author,
    body: req.body.body,
    preview: req.body.preview,
    authorId: req.body.authorId,
  });

  newArticle.save().then((article) => res.json(article));
});

router.patch("/api/articles/:id", (req, res) => {
  Article.findById(req.params.id).then((article) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let b in req.body) {
      article[b] = req.body[b];
    }
    article.save();
    res.json(article);
  });
});

router.delete("/api/articles/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => article.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ sucess: false }));
});

module.exports = router;
