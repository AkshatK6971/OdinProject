const { Router } = require("express");
const moviesRouter = Router();
const moviesController = require("../controllers/moviesController");

moviesRouter.get("/", moviesController.renderAllMovies);
moviesRouter.get("/add", moviesController.renderGetAddMovie);
moviesRouter.post("/add", moviesController.renderPostAddMovie);
moviesRouter.get("/:movieId", moviesController.renderMovieById);
moviesRouter.get("/:movieId/update", moviesController.renderGetUpdateMovie);
moviesRouter.post("/:movieId/update", moviesController.renderPostUpdateMovie);
moviesRouter.get("/:movieId/delete", moviesController.renderDeleteMovie);


module.exports = moviesRouter;