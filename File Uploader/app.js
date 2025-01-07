const express = require('express');
const app = express();
const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');
const session = require("express-session");
const passport = require("passport");

const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
    expressSession({
      cookie: {
       maxAge: 7 * 24 * 60 * 60 * 1000 // ms
      },
      secret: "randomstring",
      resave: true,
      saveUninitialized: true,
      store: new PrismaSessionStore(
        new PrismaClient(),
        {
          checkPeriod: 2 * 60 * 1000,  //ms
          dbRecordIdIsSessionId: true,
          dbRecordIdFunction: undefined,
        }
      )
    })
);
app.use(session({ secret: "randomstring", resave: false, saveUninitialized: false }));
app.use(passport.session());

const authRouter = require("./routes/authRouter");
app.use("/", authRouter);
const fileRouter = require("./routes/fileRouter");
app.use("/file", fileRouter);
const folderRouter = require("./routes/folderRouter");
app.use("/folder", folderRouter);

app.use("*", (req, res) => {
  res.status(404);
  res.render("404");
});
app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.render("404");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});

