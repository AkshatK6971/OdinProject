const { Router } = require("express");
const genresRouter = Router();
const genresController = require("../controllers/genresController");

genresRouter.get("/", genresController.renderAllGenres);
genresRouter.get("/add", genresController.renderGetAddGenre);
genresRouter.post("/add", genresController.renderPostAddGenre);
genresRouter.get("/:genreId", genresController.renderGenreById);
genresRouter.get("/:genreId/update", genresController.renderGetUpdateGenre);
genresRouter.post("/:genreId/update", genresController.renderPostUpdateGenre);
genresRouter.get("/:genreId/delete", genresController.renderDeleteGenre);

module.exports = genresRouter;