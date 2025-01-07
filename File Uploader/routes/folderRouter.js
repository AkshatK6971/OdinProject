const { Router } = require("express");
const folderRouter = Router();
const upload = require("../controllers/uploadController");
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const folderController = require("../controllers/folderController")

folderRouter.get("/:folderId?/create", folderController.renderGetFolderCreate);
folderRouter.post("/:folderId?/create", folderController.renderPostFolderCreate);
folderRouter.get("/:folderId/update", folderController.renderGetFolderUpdate);
folderRouter.post("/:folderId/update", folderController.renderPostFolderUpdate);
folderRouter.get("/:folderId/delete", folderController.renderGetFolderDelete);
folderRouter.get("/:folderId", folderController.renderGetFolder);

module.exports = folderRouter;