const express = require('express')
const router = express.Router();
const connection = require('../dbConnection');
const mergeById = require('../utils');

//  @route GET api/questions/answers/:questionId
//  @description Get number of answers for given questionId, questionTypeCode, question title and the optionSetTxt(the possible answers)
//  @access Public
router.get('/answers/:questionId', (req, res) => {
    const { questionId } = req.params;
    const question = require(`../questions/${req.params.questionId}.json`);
    let questionOptions = [];

    // only certain questionTypeCodes currently allowed
    // In a complete system the returned data structure would likely be based on the questionTypeCode
    if (question.questionTypeCode === 'RD' || question.questionTypeCode === 'CH' || question.questionTypeCode === 'CO' || question.questionTypeCode === 'SB') {
        questionOptions = question.optionSet.options.map(option => {
            return {
                set1_txt: option.id.toUpperCase(), // .toUpperCase() to match set1_txt from database
                optionSetTxt: option.langs.en_GB.text
            }
        });
    }

    connection.query(`SELECT COUNT(id), set1_txt FROM surveydataopt WHERE questionid_txt = '${questionId}' GROUP BY set1_txt`, function (error, results) {
        if (error) throw error;
        // merging the optionSets in with the results based on the optionSet.option.id from the JSON file and set1_txt
        // saves creating another property on the data object and reduces complexity
        // now all result information is in one object property
        const mergedResults = mergeById(results, questionOptions);
        const data = {
            results: mergedResults,
            questionTypeCode: question.questionTypeCode,
            title: question.content.longTitle.en_GB.text
        }
        res.json(data);
    });
});

module.exports = router;