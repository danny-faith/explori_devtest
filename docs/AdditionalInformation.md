# JSON data and mappings

## Survey JSON (data/survey)

* Survey object includes multiple pages and every standard (pageType ST) page has 0 to n questions wrapped in a PageQuestion object
* Every PageQuestion has an id that maps to PageQuestionId on SurveyDataOpt / SurveyDataStr tables
* PageQuestion.questionId maps to JSON file in data/questions

## Question JSON (data/question)

* Question object includes 0 to n options in optionSet, optionSetX or optionsetY keys which
map to database as mentioned in QuestionTypes.md
* Question types TA, TX, ST don't have any options
* The id of question object maps to questionId on SurveyDataOpt / SurveyDataStr tables


# Database tables

* SurveyData
    * This table stores general information about a particular respondent and has a one-to-many relationship
    with the SurveyDataOpt, SurveydataInt, SurveyDataStr tables

* SurveyDataOpt
    * Stores QuestionOption related data (see QuestionTypes of which question types use this table). Relates to PageQuestion
    via pageQuestionId and QuestionOption’s questionOptionId via the set1 and set2 fields

* SurveyDataInt
    * Stores numeric data (see QuestionTypes of which question types use this table). Relates to PageQuestion
    via pageQuestionId and QuestionOptions via the questionOptionId field

* SurveyDataStr
    * Stores verbatim (string) data (see QuestionTypes of which question types use this table).
    Relates to PageQuestion via pageQuestionId
