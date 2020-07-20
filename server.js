const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const articles = require("./routes/api/articles");
const authors = require("./routes/api/authors");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// conect to mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use(authors, articles);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
