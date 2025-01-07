const { Router } = require("express");
const fileRouter = Router();
const upload = require("../controllers/uploadController");
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const fileController = require("../controllers/fileController")

fileRouter.get("/:folderId?/create", fileController.renderGetFileCreate);
fileRouter.post("/:folderId?/create", upload.single("file"), fileController.renderPostFileCreate);
fileRouter.get("/:fileId/update", fileController.renderGetFileUpdate);
fileRouter.post("/:fileId/update", fileController.renderPostFileUpdate);
fileRouter.get("/:fileId/delete", fileController.renderGetFileDelete);
fileRouter.get("/:fileId", fileController.renderGetFile);

module.exports = fileRouter;