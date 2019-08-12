const express = require('express')
const mysql = require('mysql');
const router = express.Router();
const connection = require('../dbConnection');
// connection();

router.get('/', (req, res) => {
    // console.log('survey route')
    connection.query('SELECT * FROM survey', function (error, results, fields) {
        if (error) throw error;
        const filteredData = results.map(obj => {
            const filteredObj = {};
            for(key in obj) {
                if (key === 'surveyId_txt' || key === 'name') {
                    filteredObj[key] = obj[key];
                }
            }
            return filteredObj;
        })
        res.json(filteredData);
    });
});

module.exports = router;