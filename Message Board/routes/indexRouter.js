const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages})
});

indexRouter.get("/new", (req, res) => {
    res.render("form", { title: "Mini Messageboard"});
});

indexRouter.post("/new",(req,res) => {
    messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
    res.redirect("/");
});

indexRouter.get("/message/:messageId", (req, res) => {
    const {messageId} = req.params;
    res.render("message", { title: "Mini Messageboard", message: messages[messageId]});
})

module.exports = indexRouter;