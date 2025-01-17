const express = require('express');
const app = express();
const session = require("express-session");
const passport = require("passport");
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

const authRouter = require("./routes/authRouter");
app.use("/", authRouter);
const blogRouter = require("./routes/blogRouter");
app.use("/", blogRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});

