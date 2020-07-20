const express = require("express");
const router = express.Router();

// Author Model
const Author = require("../../models/Author");

// @route GET api/Authors
// @desc Get All Authors
// @access Public
router.get("/api/authors/", (req, res) => {
  Author.find().then((authors) => res.json(authors));
});

router.get("/api/authors/:id", (req, res) => {
  Author.findById(req.params.id).then((author) => res.json(author));
});

// @route POST api/Authors
// @desc Create A Author
// @access Public
router.post("/api/authors/", (req, res) => {
  const newAuthor = new Author({
    name: req.body.name,
  });

  newAuthor.save().then((author) => res.json(author));
});

// @route DELETE api/Authors/:id
// @desc DELETE A Author
// @access Public
router.delete("/api/authors/:id", (req, res) => {
  Author.findById(req.params.id)
    .then((author) => author.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ sucess: false }));
});

module.exports = router;
