const express = require('express');
const app = express();

const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

const moviesRouter = require("./routes/moviesRouter");
app.use("/movies", moviesRouter);

const genresRouter = require("./routes/genresRouter");
app.use("/genres", genresRouter);

app.use("*", (req, res) => {
  res.status(404);
  res.render("404");
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.render("500");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});

