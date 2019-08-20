import React, { useEffect } from 'react';
import Response from '../components/Response';
import { IPageState, IPageProps, IResponses } from '../interfaces/interfaces';

const defaultProps: IPageProps = {
	title: '',
	questions: []
};

const Page: React.FC<IPageProps> = props => {
	const { title, questions } = props;
	const [responsesState, updateResponses] = React.useState<IPageState | any>(
		[]
	);

	useEffect(() => {
		Promise.all(fetches).then(() => {
			updateResponses(newResponses);
			// console.log(newResponses);
		});
	}, []);

	let newResponses: IResponses[] = [];
	let fetches: any = [];
	questions.forEach((question: any, i: number) => {
		fetches.push(
			fetch(`/api/questions/answers/${question.questionId}`)
				.then(res => res.json())
				.then(res => {
					// console.log(res);
					newResponses.push(res);
				})
				.catch(err => console.log(err))
		);
	});

	return (
		<React.Fragment>
			<h3>{title}</h3>
			{responsesState.map((response: any, i: number) => (
				<Response
					questionTitle={response.title}
					questionTypeCode={response.questionTypeCode}
					responses={response.results}
					key={i}
				/>
			))}
		</React.Fragment>
	);
};

Page.defaultProps = defaultProps;

export default Page;
