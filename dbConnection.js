const mysql = require('mysql')
require('dotenv').config();

const {
    DBHOST,
    DBUSER,
    DBPASSWORD,
    DB
} = process.env;

module.exports = connection = mysql.createConnection({
    host: DBHOST,
    user: DBUSER,
    password: DBPASSWORD,
    database: DB
});