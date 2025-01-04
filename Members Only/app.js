const path = require("node:path");
const express = require("express");
const session = require("express-session");
const indexRouter = require("./routes/indexRouter.js");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "randomstring", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("*", (req, res) => {
    res.status(404);
    res.render("404");
});
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render("500");
});

app.listen(3000, () => console.log("app listening on port 3000!"));