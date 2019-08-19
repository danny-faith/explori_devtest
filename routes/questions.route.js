const express = require('express')
const router = express.Router();
const connection = require('../dbConnection');

//  @route GET api/questions/:questionId
//  @description Get questionTypeCode and longTitle
//  @access Public
router.get('/:questionId', (req, res) => {
    // TODO: requiring this file might be a bad idea due to size (7KB - 30KB)
    // TODO: think about using file importer. Package 'fs'?
    const question = require(`../questions/${req.params.questionId}.json`);
    const data = {
        questionTypeCode: question.questionTypeCode,
        text: question.content.longTitle.en_GB.text
    };
    res.json(data);
});

module.exports = router;