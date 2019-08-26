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

	let newResponses: IResponses[] = [];
	let fetches: any = [];

	useEffect(() => {
		// Use Promise.all() to wait for all requests to complete before updating the DOM
		Promise.all(fetches).then(() => {
			updateResponses(newResponses);
		});
	}, []);

	// For each question, store a fetch request for the responses/answers in the fetches array.
	questions.forEach((question: any) => {
		fetches.push(
			fetch(`/api/questions/answers/${question.questionId}`)
				.then(res => res.json())
				.then(res => {
					newResponses.push(res);
				})
				.catch(err => console.log(err))
		);
	});

	return (
		<React.Fragment>
			<h3 className="mt-10">{title}</h3>
			{responsesState.map((response: any, i: number) => {
				if (
					response.questionTypeCode === 'RD' ||
					response.questionTypeCode === 'CH' ||
					response.questionTypeCode === 'CO' ||
					response.questionTypeCode === 'SB'
				) {
					return (
						<Response
							questionTitle={response.title}
							questionTypeCode={response.questionTypeCode}
							responses={response.results}
							key={i}
						/>
					);
				} else {
					return (
						<React.Fragment key={i}>
							<h5>{response.title}</h5>
							<p>
								** Not currently showing due to incompatible response data **
							</p>
						</React.Fragment>
					);
				}
			})}
		</React.Fragment>
	);
};

Page.defaultProps = defaultProps;

export default Page;
