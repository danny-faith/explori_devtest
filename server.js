const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mysql = require('mysql')
const questionRoute = require('./routes/questions.route');
const surveyRoute = require('./routes/survey.route');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'explori_devtest2'
});

connection.connect(function(err) {
    (err) ? console.log(err) : console.log('....Connected to: ', connection.config.database);
});

// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

//     console.log('connected as id ' + connection.threadId);
// });

// connection.query('SELECT * FROM survey', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0]);
// });

app.use('/api/question', questionRoute);
app.use('/api/survey', surveyRoute);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

