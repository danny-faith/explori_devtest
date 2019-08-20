import React, { useEffect } from 'react';
import Response from '../components/Response';
import { IPageProps } from '../interfaces/interfaces';

const defaultProps: IPageProps = {
	title: '',
	questions: []
};

interface IResponses {
	responses: object[];
	questionTitle: string;
	questionTypeCode: string;
}

interface IPageState {
	responsesState: Array<IResponses>;
}

const Page: React.FC<IPageProps> = props => {
	const { title, questions } = props;
	const [responsesState, updateResponses] = React.useState<IPageState | any>(
		[]
	);

	useEffect(() => {
		// console.log('useEffect');
		// responsesState.length === 0 && fetchData();
		// if (responsesState.length === 0) {
		// 	// fetchData().then(res => {
		// 	// 	console.log(res);
		// 	// });
		// }
		Promise.all(fetches).then(() => {
			updateResponses(newResponses);
			console.log(newResponses);
		});
	}, []);

	let newResponses: IResponses[] = [];
	let fetches: any = [];
	questions.forEach((question: any, i: number) => {
		// const newResponsesObj: IResponses = {
		// 	responses: [],
		// 	questionTitle: '',
		// 	questionTypeCode: ''
		// };
		// async function getResponses(questionId: string) {
		// 	let res = await fetch(`/api/questions/answers/${questionId}`);
		// 	let data = await res.json();
		// 	return data;
		// }
		// getResponses(question.questionId).then(data => {
		// 	// console.log(data);
		// 	newResponsesObj.responses = data;
		// });
		// async function getTitleAndTypeCode(questionId: string) {
		// 	let res = await fetch(`/api/questions/${questionId}`);
		// 	let data = await res.json();
		// 	return data;
		// }
		// getTitleAndTypeCode(question.questionId).then(data => {
		// 	// console.log(data);
		// 	newResponsesObj.questionTitle = data.title;
		// 	newResponsesObj.questionTypeCode = data.questionTypeCode;
		// });
		fetches.push(
			fetch(`/api/questions/answers/${question.questionId}`)
				.then(res => res.json())
				.then(res => {
					// newResponses = [...responsesState, newResponsesObj];
					newResponses.push(res);
					// console.log('res: ', res);
				})
				.catch(err => console.log(err))
		);

		// fetch(`/api/questions/${question.questionId}`)
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		newResponsesObj.questionTitle = res.title;
		// 		newResponsesObj.questionTypeCode = res.questionTypeCode;
		// 	})
		// 	.catch(err => console.log(err));
	});

	// useEffect(() => {

	// }, []);
	// setTimeout(() => console.log(newResponses), 3000);

	return (
		<React.Fragment>
			<h3>{title}</h3>
			{responsesState.map((response: any, i: number) => (
				<Response
					questionTitle={response.title}
					questionTypeCode={response.questionTypeCode}
					responses={response.responses}
					key={i}
				/>
			))}
		</React.Fragment>
	);
};

Page.defaultProps = defaultProps;

export default Page;
