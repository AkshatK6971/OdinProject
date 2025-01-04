const asyncHandler = require("express-async-handler");
const db = require("../db/queries.js");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

const renderIndex = asyncHandler(async (req, res) => {
    const messages = await db.getMessages();
    res.render("index", {user: req.user, messages});
});

const renderGetSignUp = asyncHandler(async (req, res) => {
    res.render("signup");
});

const renderPostSignUp = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.render("signup", {errors: errors.array()});
    }
    else{
        const {firstname, lastname, username, email, password, isadmin} = req.body;
        let isAdmin = false;
        let membership = false;
        if(isadmin == "on"){
            isAdmin = true;
            membership = true;
        }
        await bcrypt.hash(password, 10, async (err, hash) => {
            await db.insertUser(firstname, lastname, username, email, hash, membership, isAdmin);
        });
        res.redirect("/login");
    }
});

const renderGetLogin = asyncHandler(async (req, res) => {
    let message = null;
    if(req.session.messages && req.session.messages.length > 0){
        message = req.session.messages[0];
        req.session.messages = []
    }
    res.render("login", {message: message});
});

const renderGetJoin = asyncHandler(async (req, res) => {
    if(!req.user)
    res.redirect("/login");
    else if(!req.user.membership_status)
    res.render("join");
    else    
    res.redirect("/");
});

const renderPostJoin = asyncHandler(async (req,res) => {
    if(req.user){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.render("join", {errors: errors.array()});
        }
        else{
            await db.setMembershipStatus(req.user.id);
            res.redirect("/");
        }
    }
});

const renderGetNew = asyncHandler(async (req, res) => {
    if(!req.user)
    res.redirect("/login");
    else
    res.render("new");
});

const renderPostNew = asyncHandler(async (req, res) => {
    if(req.user){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.render("new", {errors: errors.array()});
        }
        else{
            const {title, message} = req.body;
            await db.insertMessage(title, message, req.user.username);
            res.redirect("/");
        }
    }
});

const deleteMessage = asyncHandler(async (req, res) => {
    if(req.user){
        if(req.user.admin_status){
            await db.deleteMessage(req.params.messageId);
            res.redirect("/");
        }
    }
});

const renderLogOut = asyncHandler(async (req, res) => {
    req.logout(() => res.redirect("/"));
});

module.exports = {renderIndex, renderGetSignUp, renderPostSignUp, renderGetLogin, renderGetJoin, renderPostJoin, 
    renderGetNew, renderPostNew, deleteMessage, renderLogOut};