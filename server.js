const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mysql = require('mysql')
const questionRoute = require('./routes/questions.route');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
});

connection.connect(function(err) {
    (err) ? console.log(err) : console.log(connection);
});

app.use('/question', questionRoute);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))