const express = require("express");
const router = express.Router();
const multer = require("multer");

// var uploading = multer({
//   dest: __dirname + "../client/public/authorImages/",
//   limits: { fileSize: 1000000, files: 1 },
// });

const Author = require("../../models/Author");

router.get("/api/authors/", (req, res) => {
  Author.find().then((authors) => res.json(authors));
});

router.get("/api/authors/:id", (req, res) => {
  Author.findById(req.params.id).then((author) => res.json(author));
});

router.post("/api/authors/", (req, res) => {
  const newAuthor = new Author({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
  });

  newAuthor.save().then((author) => res.json(author));
});

router.patch("/api/authors/:id", (req, res) => {
  Author.findById(req.params.id).then((author) => {
    if (req.body._id) {
      delete req.body._id;
    }
    for (let b in req.body) {
      author[b] = req.body[b];
    }
    author.save();
    res.json(author);
  });
});

router.delete("/api/authors/:id", (req, res) => {
  Author.findById(req.params.id)
    .then((author) => author.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ sucess: false }));
});

module.exports = router;
