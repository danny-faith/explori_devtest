import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import SurveyListItem from '../components/SurveyListItem';

interface IProps {}

interface ISurvey {
	surveyId_txt: string;
	name: string;
}

const YourSurveys: React.FC = () => {
	const [surveys, setSurveys] = useState<ISurvey[]>([]);

	useEffect(() => {
		fetch('/api/surveys/all')
			.then(response => response.json())
			.then(res => {
				// console.log(res);
				setSurveys(res);
			})
			.catch(err => console.log(err));
	}, []);
	return (
		<ListGroup className="my-4">
			{surveys.map((survey: ISurvey, i: number) => (
				<SurveyListItem
					surveyTitle={survey.name}
					surveyId_txt={survey.surveyId_txt}
					key={i}
				/>
			))}
		</ListGroup>
	);
};

export default YourSurveys;
