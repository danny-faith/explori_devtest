import React from 'react';
import SurveyListItem from '../components/SurveyListItem';

interface IProps {}

const YourSurveys: React.FC<IProps> = () => {
	return (
		<SurveyListItem surveyTitle="Feb 2017" surveyLink="http://google.com" />
	);
};

export default YourSurveys;
