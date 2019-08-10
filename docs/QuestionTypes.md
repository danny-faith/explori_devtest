
# Question Types:

```markdown
* Question Type
	* Description
	* Table where responses are stored
```
* CH 
	* Multiple Choice - one PageQuestion response can contain one or more responses
	* SurveyDataOpt - set1
    * Optionset.id on Question JSON maps to set1 in database

* RD 
	* Single Choice - one PageQuestion response can contain one response
	* SurveyDataOpt - set1
    * Optionset.id on Question JSON maps to set1 in database

* SB
	* Dropdown List - same as RD
	* SurveyDataOpt - set1

* CO
	* Country List - same as RD
	* SurveyDataOpt - set1

* OD
	* Priority / Ranking - each option is given a priority
	* SurveyDataOpt - set1 and priority fields
    * Optionset.id on Question JSON maps to set1 in database

* PC
	* Percentage questions - the respondent provides each option with a percentage - the sum of all percentages for a given response must add up to 100
	* SurveyDataInt
    * Optionset.id on Question JSON maps to set1 in database

* I
	* Numeric
	* SurveyDataInt
    * Optionset.id on Question JSON maps to set1 in database

* TB
	* Grid - one PageQuestion response can contain one or more responses
	* SurveyDataOpt - set1 and set2
    * OptionSetY.id on Question JSON maps to set1 in database
    * OptionSetX.id on Question JSON maps to set2 in database

* RT
	* Rating - same as Grid
	* SurveyDataOpt - set1 and set2
    * OptionSetY.id on Question JSON maps to set1 in database
    * OptionSetX.id on Question JSON maps to set2 in database

* TX / TA
	* Text / Text Area
	* SurveyDataStr

* Other Specify
	* text Verbatim text - see PageQuestion above
	* SurveyDataStr - uses pageQuestionId where the parentpagequestionId is not null

* ST
	* Static text
	* No SurveyData recorded for this question type