import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import SurveyListItem from '../components/SurveyListItem';

interface IProps {}

const YourSurveys: React.FC<IProps> = () => {
	useEffect(() => {
		fetch('/question')
			.then(response => response.json())
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}, []);
	return (
		<ListGroup>
			<SurveyListItem surveyTitle="Feb 2017" surveyLink="http://google.com" />
			<SurveyListItem surveyTitle="Feb 2017" surveyLink="http://google.com" />
			<SurveyListItem surveyTitle="Feb 2017" surveyLink="http://google.com" />
		</ListGroup>
	);
};

export default YourSurveys;
