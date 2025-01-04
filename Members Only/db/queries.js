const db = require("./pool")

async function getMessages() {
    const {rows} = await db.query("select * from messages;");
    return rows;
}

async function getUsers() {
    const {rows} = await db.query("select * from users;");
    return rows;
}

async function insertUser(firstName, lastName, username, email, hash, membership_status, admin_status) {
    await db.query(`insert into users (firstName, lastName, username, email, hash, membership_status, admin_status) 
    values (($1), ($2), ($3), ($4), ($5), ($6), ($7));`, [firstName, lastName, username, email, hash, membership_status, admin_status]);
}

async function getUserById(id) {
    const {rows} = await db.query("select * from users where id=($1);", [id]);
    return rows[0];
}

async function getUserbyName(username) {
    const {rows} = await db.query("select * from users where username=($1);", [username]);
    return rows[0];
}

async function setMembershipStatus(id) {
    await db.query("update users set membership_status = true where id=($1);", [id]);
}

async function insertMessage(title, message, username) {
    await db.query("insert into messages (title, message, username) values (($1), ($2), ($3));", [title, message, username]);
}

async function deleteMessage(id) {
    await db.query("delete from messages where id=($1);", [id]);
}

module.exports = {getMessages, insertUser, getUserById, getUserbyName, setMembershipStatus, 
    insertMessage, deleteMessage, getUsers}