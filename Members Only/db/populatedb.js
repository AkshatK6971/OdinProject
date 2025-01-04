const db = require("./pool")

const setup = `
DROP TABLE IF EXISTS users cascade;
DROP TABLE IF EXISTS messages;

CREATE TABLE users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    hash TEXT NOT NULL,
    membership_status BOOLEAN DEFAULT FALSE,
    admin_status BOOLEAN DEFAULT FALSE
);

CREATE TABLE messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    username VARCHAR(100) NOT NULL,
    FOREIGN KEY (username) REFERENCES users (username) ON DELETE CASCADE
);
`;

async function main(){
    await db.query(setup);
}

main();