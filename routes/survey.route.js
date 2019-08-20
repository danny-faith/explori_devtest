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
    // console.log(surveyId_txt);
    (async () => {
        const fileContents = await loadJsonFile(`./survey/${surveyId_txt}.json`);
        res.json(fileContents);
        //=> {foo: true}
    })();
    // connection.query('SELECT surveyId_txt, name FROM survey', function (error, results) {
    //     if (error) throw error;
    //     res.json(results);
    // });
});

// surveyData > surveyId_txt

//  @route GET api/surveys/data
//  @description Get questionTypeCode and longTitle
//  @access Public
router.get('/surveydataid/:surveyId_txt', (req, res) => {
    console.log(req.params.surveyId_txt)
//    const uuid = 'AD2ADA56-4B09-11E9-AF77-0A3056FD536A';
    connection.query(`SELECT surveyDataId_txt FROM surveydata WHERE surveyId = unhex(replace('${req.params.surveyId_txt}', '-', ''))`, function (error, results) {
        if (error) throw error;

        // console.log(results.forEach(item => console.log(item)))
        // res.json(results);
        // const newArray = results.filter(item => item.surveyDataId_txt === 'BFF66338-CFE0-075C-E122-CDD29A0954DD');
        // // console.log(newArray);
        // // let surveysWithResponses = [];
        // const surveysWithResponses = results.map((item) => {
        //     // console.log(item.surveyDataId_txt)
        //     connection.query(`SELECT questionid_txt FROM surveydataopt WHERE surveyDataId_txt = 'BFF66338-CFE0-075C-E122-CDD29A0954DD'`, function (error, resultsInner) {
        //         if (error) throw error;
        //         console.log(resultsInner)
        //         return resultsInner;
        //         res.json(resultsInner);
        //     });    
        // })
        // res.json(surveysWithResponses);
        // console.log(surveysWithResponses);
        console.log('results: ', results)
        
        const surveyDataId_txt = 'BFF66338-CFE0-075C-E122-CDD29A0954DD'; // 10
        // const surveyDataId_txt = '84C7FB53-135D-4BC8-A62A-F6834A90A8C3'; // 0
        // const surveyDataId_txt = 'D4C7299B-99EC-686F-7FE6-E5B4E63A160E'; // 58
        // const surveyDataId_txt = '8FA98DAD-BBBE-4643-DC81-9CBC982A6661'; // 58
        // console.log(surveyDataId_txt)
        // console.log(results[704].surveyDataId_txt)
        connection.query(`SELECT surveydataopt.questionid_txt FROM surveydataopt WHERE surveyDataId_txt = '${surveyDataId_txt}'`, function (error, results2) {
            if (error) throw error;
            // console.log(results)
            res.json(results2);
        });

        // connection.query(`SELECT questionid_txt FROM surveydatastr WHERE surveyDataId_txt = '${surveyDataId_txt}'`, function (error, results) {
        //     if (error) throw error;
        //     // console.log(results)
        //     res.json(results);
        // });

        // res.json(results);
    });
});

router.get('/questionid/:surveydataid_txt', (req, res) => {
    const {surveydataid_txt} = req.params;
    connection.query(`SELECT questionid_txt FROM surveydataopt WHERE surveyDataId_txt = '${surveydataid_txt}'`, function (error, results) {
        if (error) throw error;
        // console.log(results)
        res.json(results);
    });
});



module.exports = router;

// SELECT questionid_txt FROM surveydataopt WHERE surveyDataId_txt = 'BFF66338-CFE0-075C-E122-CDD29A0954DD'