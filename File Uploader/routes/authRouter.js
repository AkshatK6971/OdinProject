const { Router } = require("express");
const authRouter = Router();
const authController = require("../controllers/authController");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { body } = require("express-validator");
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

passport.use(
    new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
    }, asyncHandler(async (email, password, done) => {
        const user = await prisma.UserAccount.findUnique({
            where: {
                email: email,
            },
        })
        if (!user) {
            return done(null, false, { message: "Incorrect email" });
        }
        const match = await bcrypt.compare(password, user.password);
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
    const user = await prisma.UserAccount.findUnique({
        where: {
            id: id,
        },
        include: {
            Folder: true,
            File: true
        }
    })
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
    body("email").trim()
        .notEmpty().withMessage("Email must not be empty.")
        .isEmail().withMessage("Email entered is not a valid email.")
        .normalizeEmail(),
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

authRouter.get("/", (req,res) => {res.render("index");});
authRouter.get("/signup", authController.renderGetSignup);
authRouter.post("/signup", validateSignUp, authController.renderPostSignup);
authRouter.get("/login", authController.renderGetLogin);
authRouter.post("/login", passport.authenticate("local", {successRedirect: "/myfiles", failureRedirect: "/login", failureMessage: true}));
authRouter.get("/myfiles", authController.renderMyFiles);
authRouter.get("/logout", authController.renderLogOut);

module.exports = authRouter;