const express = require('express')
const router = express.Router();
const connection = require('../dbConnection');

//  @route GET api/questions/:questionId
//  @description Get questionTypeCode and longTitle
//  @access Public
// router.get('/:questionId', (req, res) => {
//     // TODO: requiring this file might be a bad idea due to size (7KB - 30KB)
//     // TODO: think about using file importer. Package 'fs'?
//     const question = require(`../questions/${req.params.questionId}.json`);
//     const data = {
//         questionTypeCode: question.questionTypeCode,
//         text: question.content.longTitle.en_GB.text
//     };
//     res.json(data);
// });

//  @route GET api/questions/answers/:questionId
//  @description Get number of answers for given questionId, questionTypeCode, question title and the optionSetTxt(the possible answers)
//  @access Public
router.get('/answers/:questionId', (req, res) => {
    const { questionId } = req.params;
    const question = require(`../questions/${req.params.questionId}.json`);
    let questionOptions = [];
    // only certain questionTypeCodes currently allowed
    // In a complete system the returned data structure would likely be based on the questionTypeCode
    if(question.questionTypeCode === 'RD' || question.questionTypeCode === 'CH' || question.questionTypeCode === 'CO' || question.questionTypeCode === 'SB') {
        questionOptions = question.optionSet.options.map(option => {
            return {
                set1_txt: option.id.toUpperCase(), // .toUpperCase() to match set1_txt from database
                optionSetTxt: option.langs.en_GB.text
            }
        });
    }

    // `mergeById()` Courtesy of StackOverflow, sadly not my own creation
    const mergeById = (a1, a2) =>
        a1.map(itm => ({
            ...a2.find((item) => (item.set1_txt === itm.set1_txt) && item),
            ...itm
    }));
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