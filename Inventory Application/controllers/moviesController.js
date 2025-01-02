const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const renderAllMovies = asyncHandler(async (req, res) => {
    const rows = await db.getAllMovies();
    res.render("movies", {rows});
});

const renderMovieById = asyncHandler(async (req, res) => {
    const movieId = req.params.movieId;
    const {rows, genre} = await db.getMovieById(movieId);
    res.render("movie", {rows, genre});
});

const renderDeleteMovie = asyncHandler(async (req, res) => {
    const movieId = req.params.movieId;
    await db.deleteMovie(movieId);
    res.redirect("/movies");
});

const renderGetAddMovie = asyncHandler(async (req, res) => {
    const rows = await db.getAllGenres();
    res.render("addMovie", {rows});
});

const renderPostAddMovie = asyncHandler(async (req, res) => {
    const {name, genre} = req.body;
    const id = await db.getGenreByName(genre);
    await db.insertMovie(name, id);
    res.redirect("/movies");
});

const renderGetUpdateMovie = asyncHandler(async (req, res) => {
    const movieId = req.params.movieId;
    const {rows, genre} = await db.getMovieById(movieId);
    const genres = await db.getAllGenres();
    res.render("updateMovie", {rows, genre, genres});
});

const renderPostUpdateMovie = asyncHandler(async (req, res) => {
    const {name, genre} = req.body;
    const movieId = req.params.movieId;
    const genreId = await db.getGenreByName(genre);
    await db.updateMovie(name, movieId, genreId);
    res.redirect("/movies");
});

module.exports = {renderAllMovies, renderMovieById, renderDeleteMovie, renderGetAddMovie, renderPostAddMovie, 
    renderGetUpdateMovie, renderPostUpdateMovie}