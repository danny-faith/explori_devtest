import React, { useEffect } from 'react';
import Response from '../components/Response';

interface IProps {
	match: {
		params: {
			surveyId_txt: string;
		};
	};
	location: {
		state: {
			title: string;
		};
	};
}

interface IResponseList {
	questionIds: IQuestionId;
}

interface IQuestionId {
	questionid_txt: string;
}

const SurveyResponses: React.FC<IProps> = props => {
	const { title: surveyTitle } = props.location.state;
	const { surveyId_txt } = props.match.params;
	const [questionIds, updateQuestionIds] = React.useState([]);
	// console.log(surveyId_txt);
	useEffect(() => {
		console.log(surveyId_txt);
		fetch(`/api/surveys/surveydataid/${surveyId_txt}`)
			.then(response => response.json())
			.then(res => {
				// updateQuestionIds(res);
				// fetch(`/api/survey/questionid/${}`)
				console.log('res: ', res);
			})
			.catch(err => console.log(err));
	}, [surveyId_txt]);
	// console.log('Get survey responses');
	return (
		<div>
			<h1>{surveyTitle}</h1>
			<p>Responses {questionIds.length}</p>
			{/* {questionIds.map((questionId: IQuestionId, i: number) => (
				<Response key={i} questionId_txt={questionId.questionid_txt} />
			))} */}
			<Response />
		</div>
	);
};

export default SurveyResponses;
