const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const renderGetSignup = (req, res) => {
    res.render("signup");
}

const renderPostSignup = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.render("signup", {errors: errors.array()});
    }
    else{
        const {firstname, lastname, email, password} = req.body;
        await bcrypt.hash(password, 10, async (err, hash) => {
            await prisma.UserAccount.create({
                data: {
                    firstName: firstname,
                    lastName: lastname,
                    email: email,
                    password: hash,
            }});
        });
        res.redirect("/login");
    }
});

const renderGetLogin = (req, res) => {
    let message = null;
    if(req.session.messages && req.session.messages.length > 0){
        message = req.session.messages[0];
        req.session.messages = []
    }
    res.render("login", {message: message});
}; 

const renderMyFiles = (req, res) => {
    if(req.user)
        res.render("myfiles", {user: req.user});
    else
        res.redirect("/login");
}

const renderLogOut = (req, res) => {
    req.logout(() => res.redirect("/"));
}

module.exports = {renderGetSignup, renderPostSignup, renderGetLogin, renderMyFiles, renderLogOut}
