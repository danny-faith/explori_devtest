import React, { useEffect } from 'react';
import Response from '../components/Response';

const SurveyResponses: React.FC = () => {
	useEffect(() => {
		fetch('/api/question')
			.then(response => response.json())
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}, []);
	console.log('Get survey responses');
	return (
		<div>
			<h1>Survey Responses</h1>
			<Response question="Did you attend the survey in 2019?" />
		</div>
	);
};

export default SurveyResponses;
