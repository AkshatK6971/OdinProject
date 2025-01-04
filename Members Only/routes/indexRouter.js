const { Router } = require("express");
const indexRouter = Router();
const mainController = require("../controllers/mainController.js");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const db = require("../db/queries.js");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { body } = require("express-validator");

passport.use(
    new LocalStrategy(asyncHandler(async (username, password, done) => {
        const user = await db.getUserbyName(username);

        if (!user) {
            return done(null, false, { message: "Incorrect username" });
        }
        const match = await bcrypt.compare(password, user.hash);
        if (!match) {
            return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
    }))
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser(asyncHandler(async (id, done) => {
    const user = await db.getUserById(id);
    done(null, user);
}));


const validateSignUp = [
    body("firstname").trim()
        .notEmpty().withMessage("First name must not be empty.")
        .isAlpha().withMessage("First name must contain alphabets only.")
        .isLength({ min: 1, max: 20 }).withMessage("First name must be within 1 to 20 characters."),
    body("lastname").trim()
        .notEmpty().withMessage("Last name must not be empty.")
        .isAlpha().withMessage("Last Name must contain alphabets only.")
        .isLength({ min: 1, max: 20 }).withMessage("Last name must be within 1 to 20 characters."),
    body("username").trim()
        .notEmpty().withMessage("Username must not be empty.")
        .isAlphanumeric().withMessage("Username must be alphanumeric only.")
        .custom(async (value) => {
            const rows = await db.getUsers();
            if(rows.some(user => user.username == value))
                throw new Error("Username already taken.");
        }),
    body("email").trim()
        .notEmpty().withMessage("Email must not be empty.")
        .isEmail().withMessage("Email entered is not a valid email.")
        .normalizeEmail()
        .custom(async (value) => {
            const rows = await db.getUsers();
            if(rows.some(user => user.email == value))
                throw new Error("Email already taken.");
        }),
    body("password").trim()
        .notEmpty().withMessage("Password must not be empty.")
        .isStrongPassword().withMessage("Password must contain atleast 8 characters including atleast 1 lowercase, 1 uppercase, 1 number, 1 symbol."),
    body("confirm_pass").trim().custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error("Passwords do not match.");
        }
        else{
            return true;
        }})
];

const validateJoin = [
    body("joinpassword").trim()
        .notEmpty().withMessage("Password cannot be empty.")
        .custom((value, {req}) => {
            if(value != "password")
                throw new Error("Wrong Password :(");
            else
                return true;
        })
];

const validateMessage = [
    body("title").trim()
        .notEmpty().withMessage("Title cannot be empty.")
        .isAlphanumeric().withMessage("Title must be alphanumeric only.")
        .isLength({min: 1, max: 20}).withMessage("Title must be within 1 to 20 characters."),
    body("message").trim()
        .notEmpty().withMessage("Message must not be empty.")
        .isLength({min: 1, max: 100}).withMessage("Message must be within 1 to 100 characters"),
];

indexRouter.get("/", mainController.renderIndex);
indexRouter.get("/signup", mainController.renderGetSignUp);
indexRouter.post("/signup", validateSignUp, mainController.renderPostSignUp);
indexRouter.get("/login", mainController.renderGetLogin);
indexRouter.post("/login", passport.authenticate("local", {successRedirect: "/", failureRedirect: "/login", failureMessage: true}));
indexRouter.get("/join", mainController.renderGetJoin);
indexRouter.post("/join", validateJoin, mainController.renderPostJoin);
indexRouter.get("/logout", mainController.renderLogOut);
indexRouter.get("/new", mainController.renderGetNew);
indexRouter.post("/new", validateMessage, mainController.renderPostNew);
indexRouter.get("/:messageId/delete", mainController.deleteMessage);

module.exports = indexRouter;