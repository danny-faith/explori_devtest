import React, { useEffect } from 'react';
import Page from '../components/Page';
import {
	ISurveyResponseProps,
	IPage,
	IPageState
} from '../interfaces/interfaces';

const SurveyResponses: React.FC<ISurveyResponseProps> = props => {
	const { title: surveyTitle } = props.location.state;
	const { surveyId_txt } = props.match.params;
	const [pages, updatePages] = React.useState<IPageState | any>([]);

	useEffect(() => {
		fetch(`/api/surveys/${surveyId_txt}`)
			.then(response => response.json())
			.then(res => {
				// console.log(res.pages);
				updatePages(res.pages);
			})
			.catch(err => console.log(err));
	}, [surveyId_txt]);

	return (
		<div>
			<h1>{surveyTitle}</h1>
			<p>Responses {pages.length}</p>
			{/* Im passing down question IDs, so maybe page.questionIds */}
			{pages.map((page: IPage, i: number) => (
				<Page key={i} title={page.title} questions={page.questions} />
			))}
		</div>
	);
};

export default SurveyResponses;
