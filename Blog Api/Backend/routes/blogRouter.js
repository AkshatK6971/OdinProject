const express = require('express');
const blogRouter = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const passport = require('passport');

blogRouter.get("/blogs", async (req, res) => {
    const blogs = await prisma.Blog.findMany();
    res.json(blogs);
});

blogRouter.get("/blog/:blogId", async (req, res) => {
    const {blogId} = req.params;
    const blog = await prisma.Blog.findUnique({
        where: {
            id: parseInt(blogId),
        },
        include: {
            Comments: true,
        }
    });

    res.json(blog);
});

blogRouter.post("/:blogId/comment", passport.authenticate("jwt", { session: false }), async(req, res) => {
    const {blogId} = req.params;
    var now = new Date();
    var date = now.toISOString();
    await prisma.Comment.create({
        data: {
            content: req.body.content, 
            date: date.split('T')[0], 
            userEmail: req.user.email, 
            blogId: parseInt(blogId),
        }
    });

    res.json({"message" : "Comment Sucessfully Added"});
});

blogRouter.put("/comment/:commentId", passport.authenticate("jwt", { session: false }), async(req, res) => {
    const comment = await prisma.Comment.findUnique({
        where: {
            id: parseInt(req.params.commentId)
        }
    });
    if(comment.userEmail == req.user.email){
        await prisma.Comment.update({
            where: {
                id: parseInt(req.params.commentId),
            },
            data: {
                content: req.body.content,
            }
        });
        res.json({"message" : "Update Successful"});
    }
    else
    res.json({"message" : "Unauthorized"});
});

blogRouter.delete("/comment/:commentId", passport.authenticate("jwt", { session: false }), async(req, res) => {
    const comment = await prisma.Comment.findUnique({
        where:{
            id: parseInt(req.params.commentId),
        }
    });

    if(comment.userEmail == req.user.email){
        await prisma.Comment.delete({
            where:{
                id: parseInt(req.params.commentId),
            }
        });
        res.json({"message" : "Deletion Successful"});
    }    
    else
    res.json({"message" : "Unauthorized"});
});

module.exports = blogRouter