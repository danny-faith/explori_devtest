const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mysql = require('mysql')
const questionsRoute = require('./routes/questions.route');
const surveysRoute = require('./routes/survey.route');
const connection = require('./dbConnection');

// Testing connection
connection.connect(function(err) {
    (err) ? console.log(err) : console.log('....Connected to: ', connection.config.database);
});

app.use('/api/questions', questionsRoute);
app.use('/api/surveys', surveysRoute);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

