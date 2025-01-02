const pool = require("./pool");

async function getAllMovies() {
    const {rows} = await pool.query("select * from movies order by id;");
    return rows;
}

async function getMovieById(movieId) {
    const {rows} = await pool.query("select * from movies where id=($1);", [movieId]);
    const genre = await getGenreById(rows[0].genre_id);
    return {rows, genre};
}

async function getGenreById(genreId) {
    const {rows} = await pool.query("select * from genres where id=($1);",[genreId]);
    const genre = rows[0];
    return genre;
}

async function getAllGenres() {
    const {rows} = await pool.query("select * from genres order by id;");
    return rows;
}

async function getGenreByIdWithMovies(genreId) {
    const genre = await getGenreById(genreId);
    const {rows} = await pool.query("select * from movies where genre_id=($1)", [genreId]);
    return {rows, genre};
}

async function deleteMovie(movieId) {
    await pool.query("delete from movies where id=($1)", [movieId]);
}

async function deleteGenre(genreId) {
    await pool.query("delete from genres where id=($1)", [genreId]);
}

async function getGenreByName(genre) {
    const {rows} = await pool.query("select * from genres where name=($1)", [genre]);
    return rows[0].id;
}

async function insertMovie(name, id) {
    await pool.query("insert into movies (name, genre_id) values (($1), ($2))", [name, id]);
}

async function insertGenre(genre) {
    await pool.query("insert into genres (name) values (($1))", [genre]);
}

async function updateMovie(name, movieId, genreId) {
    await pool.query("update movies set name=($1), genre_id=($2) where id=($3)", [name, genreId, movieId]);
}

async function updateGenre(name, genreId) {
    await pool.query("update genres set name=($1) where id=($2)", [name, genreId]);
}

module.exports =  {getAllMovies, getMovieById, getAllGenres, getGenreById, getGenreByIdWithMovies,
deleteMovie, deleteGenre, getGenreByName, insertMovie, insertGenre, updateMovie, updateGenre};

