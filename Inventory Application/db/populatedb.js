const db = require("./pool")

const setup = `
DROP TABLE IF EXISTS genres CASCADE;
DROP TABLE IF EXISTS movies;

CREATE TABLE IF NOT EXISTS genres (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    name TEXT,
    genre_id INT,
    FOREIGN KEY (genre_id) REFERENCES genres(id) on delete cascade
);

INSERT INTO genres (name)
VALUES
    ('Sci-Fi'),
    ('Action'),
    ('Thriller'),
    ('Drama'),
    ('Superhero');

INSERT INTO movies (name, genre_id)
VALUES
    ('Interstellar', 1),
    ('Tenet', 2),
    ('Prestige', 3),
    ('Oppenheimer', 4),
    ('Dark Knight', 5);
`;

async function main(){
    await db.query(setup);
}

main();