const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const renderAllGenres = asyncHandler(async (req,res) => {
    const rows = await db.getAllGenres();
    res.render("genres", {rows});
});

const renderGenreById = asyncHandler(async (req,res) => {
    const genreId = req.params.genreId;
    const {rows, genre} = await db.getGenreByIdWithMovies(genreId);
    res.render("genre", {rows, genre});
});

const renderDeleteGenre = asyncHandler(async (req, res) => {
    const genreId = req.params.genreId;
    await db.deleteGenre(genreId);
    res.redirect("/genres"); 
});

const renderGetAddGenre = asyncHandler(async (req, res) => {
    res.render("addGenre");
});

const renderPostAddGenre = asyncHandler(async (req, res) => {
    const {name} = req.body;
    await db.insertGenre(name);
    res.redirect("/genres");
});

const renderGetUpdateGenre = asyncHandler(async (req, res) => {
    const genreId = req.params.genreId;
    const genre = await db.getGenreById(genreId);
    res.render("updateGenre", {genre});
});

const renderPostUpdateGenre = asyncHandler(async (req, res) => {
    const {name} = req.body;
    const genreId = req.params.genreId;
    await db.updateGenre(name, genreId);
    res.redirect("/genres");
});

module.exports = {renderAllGenres, renderGenreById, renderDeleteGenre, renderGetAddGenre, renderPostAddGenre, 
    renderGetUpdateGenre, renderPostUpdateGenre}