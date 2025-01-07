const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const asyncHandler = require("express-async-handler");

const renderGetFileCreate = (req, res) => {
    if(!req.user)
        res.redirect("/login");
    else{
        let folderId = req.params.folderId;
        res.render("createfile", {folderId: folderId});
    }
}

const renderPostFileCreate = asyncHandler(async (req, res) => {
    if(req.user){
        if(req.params.folderId){
            const folder = await prisma.folder.findUnique({
                where: {
                    id: parseInt(req.params.folderId),
                }
            })
            if(folder.userId == req.user.id){
                await prisma.File.create({
                    data: {
                        name: req.file.originalname,
                        size: req.file.size.toString(),
                        url: req.file.path,
                        createdAt: new Date().toString(),
                        userId: req.user.id,
                        folderId: parseInt(req.params.folderId),
                    }
                });
                res.redirect(`/folder/${req.params.folderId}`);
            }
            else
                res.render("createfile", {message: "You are not authorized to upload files here."});
        }
        else{
            await prisma.File.create({
                data: {
                    name: req.file.originalname,
                    size: req.file.size.toString(),
                    url: req.file.path,
                    createdAt: new Date().toString(),
                    userId: req.user.id,
                }
            });
            res.redirect("/myfiles");
        }
    }
    else
    res.redirect("/login");
});

const renderGetFile = asyncHandler(async (req, res) => {
    if(req.user){
        const fileId = req.params.fileId;
        const file = await prisma.File.findUnique({
            where: {
                id: parseInt(fileId),
            }
        });

        if(file.userId == req.user.id)
        res.render("file", {file: file});
        else
        res.render("file", {message: "You are not authorized to view this file."});
    }
    else
    res.redirect("/login");
});

const renderGetFileUpdate = (req, res) => {
    if(req.user){
        const fileId = req.params.fileId;
        const file = req.user.File.find(file => file.id == fileId);
        if(!file){
            res.render("updatefile", {message: "You are not authorized to update this file."});
        }
        else{
            res.render("updatefile", {file: file});
        }
    }
    else
    res.redirect("/login");
}

const renderPostFileUpdate = asyncHandler(async (req, res) => {
    if(req.user){
        const fileId = req.params.fileId;
        const name = req.body.name;
        const file = req.user.File.find(file => file.id == fileId);
        if(!file){
            res.render("updatefile", {message: "You are not authorized to update this file."});
        }
        else{
            const updatedfile = await prisma.File.update({
                where: {
                    id: parseInt(fileId),
                },
                data: {
                    name: name,
                }
            });
            if(updatedfile.folderId){
                res.redirect(`/folder/${updatedfile.folderId}`);
            }
            else
                res.redirect("/myfiles");
        }
    }
    else
    res.redirect("/login");
});

const renderGetFileDelete = asyncHandler(async (req, res) => {
    if(req.user){
        const fileId = req.params.fileId;
        const file = req.user.File.find(file => file.id == fileId);
        if(!file){
            res.redirect("/myfiles");
        }
        else{
            const deletedFile = await prisma.File.delete({
                where: {
                    id: parseInt(fileId),
                },
            });
            if(deletedFile.folderId)
                res.redirect(`/folder/${deletedFile.folderId}`);
            else
                res.redirect("/myfiles");
        }
    }
    else
    res.redirect("/login");
});

module.exports = {renderGetFileCreate, renderPostFileCreate, renderGetFile, renderPostFileUpdate, 
    renderGetFileUpdate, renderGetFileDelete}