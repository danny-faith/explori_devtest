const express = require('express')
const router = express.Router();
const loadJsonFile = require('load-json-file');
const connection = require('../dbConnection');

//  @route GET api/surveys/all
//  @description Get questionTypeCode and longTitle
//  @access Public
router.get('/all', (req, res) => {
    connection.query('SELECT surveyId_txt, name FROM survey', function (error, results) {
        if (error) throw error;
        res.json(results);
    });
});

//  @route GET api/surveys/:surveyId_txt
//  @description Get survey JSON file
//  @access Public
router.get('/:surveyId_txt', (req, res) => {
    const { surveyId_txt } = req.params;
    (async () => {
        const fileContents = await loadJsonFile(`./survey/${surveyId_txt}.json`);
        res.json(fileContents);
    })();
});

module.exports = router;