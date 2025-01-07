const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const asyncHandler = require("express-async-handler");

const renderGetFolderCreate = (req, res) => {
    if(!req.user)
        res.redirect("/login");
    else{
        let folderId = req.params.folderId;
        res.render("createfolder", {folderId: folderId});
    }
}

const renderPostFolderCreate = asyncHandler(async (req, res) => {
    if(req.user){
        if(req.params.folderId){
            const folder = await prisma.folder.findUnique({
                where: {
                    id: parseInt(req.params.folderId),
                }
            });

            if(folder.userId == req.user.id){
                await prisma.Folder.create({
                    data: {
                        name: req.body.folder,
                        userId: req.user.id,
                        parentFolderId: parseInt(req.params.folderId),
                    }
                });
                res.redirect(`/folder/${req.params.folderId}`);
            }
            else    
                res.render("createfolder", {message: "You are not authorized to create folders here."});
        }
        else{
            await prisma.Folder.create({
                data: {
                    name: req.body.folder,
                    userId: req.user.id,
                }
            });
            res.redirect("/myfiles");
        }
    }
    else
    res.redirect("/login");
});

const renderGetFolder = asyncHandler(async (req,res) => {
    if(req.user){
        const folderId = req.params.folderId;
        const folder = await prisma.Folder.findUnique({
            where: {
                id: parseInt(folderId),
            },
            include: {
                files: true,
                subFolders: true,
            }
        });

        if(folder.userId == req.user.id){
            res.render("folder", {id: folder.id, files: folder.files, folders: folder.subFolders});
        }
        else
            res.render("folder", {message: "You are not authorized to view this folder."});
    }
    else
    res.redirect("/login");
});

const renderGetFolderUpdate = (req, res) => {
    if(req.user){
        const folderId = req.params.folderId;
        const folder = req.user.Folder.find(folder => folder.id == folderId);
        if(!folder){
            res.render("updatefolder", {message: "You are not authorized to update this folder."});
        }
        else{
            res.render("updatefolder", {folder: folder});
        }
    }
    else
    res.redirect("/login");
}

const renderPostFolderUpdate = asyncHandler( async (req, res) => {
    if(req.user){
        const folderId = req.params.folderId;
        const name = req.body.name;
        const folder = req.user.Folder.find(folder => folder.id == folderId);
        if(!folder){
            res.render("updatefolder", {message: "You are not authorized to update this folder."});
        }
        else{
            await prisma.Folder.update({
                where: {
                    id: parseInt(folderId),
                },
                data: {
                    name: name,
                }
            });
            res.redirect(`/folder/${folderId}`);
        }
    }
    else
    res.redirect("/login");
});

const renderGetFolderDelete = asyncHandler(async (req, res) => {
    if(req.user){
        const folderId = req.params.folderId;
        const folder = req.user.Folder.find(folder => folder.id == folderId);
        if(!folder){
            res.redirect("/myfiles");
        }
        else{
            const deletedfolder = await prisma.Folder.delete({
                where: {
                    id: parseInt(folderId),
                },
            });
            if(deletedfolder.parentFolderId)
                res.redirect(`/folder/${deletedfolder.parentFolderId}`);
            else
                res.redirect("/myfiles");
        }
    }
    else
    res.redirect("/login");
});

module.exports = {renderGetFolderCreate, renderPostFolderCreate, renderGetFolder, renderGetFolderUpdate, 
    renderPostFolderUpdate, renderGetFolderDelete}
