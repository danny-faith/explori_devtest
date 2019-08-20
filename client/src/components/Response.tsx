import React, { useEffect } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Table } from 'react-bootstrap';
import question from '../questions/46727569-7466-756C-5132-313736300000.json';

interface IResponseProps {
	responses: object[];
	questionTitle: string;
	questionTypeCode: string;
}

interface IGraph {
	graphType: string;
	fun?(text: string): string;
}

const options: Highcharts.Options = {
	title: {
		text: 'My chart'
	},
	series: [
		{
			type: 'line',
			data: [1, 2, 3]
		}
	]
};

function Example() {
	// Declare a new state variable, which we'll call "count"
	const [count, setCount] = React.useState(0);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}
// const Response: React.FC<IProps> = ({ questionId_txt }) => {
const Response: React.FC<IResponseProps> = props => {
	// let graphType = 'a graph';
	function fun() {
		return 'hello';
	}
	const [questionTitle, setQuestionTitle] = React.useState('');
	const [questionTypeCode, setQuestionTypeCode] = React.useState('');
	// const [graph, setGraphType] = React.useState<IGraph>({
	// 	graphType: '',
	// 	fun
	// });
	const responseData = [
		{
			option: '1 - 2 hours',
			ct: '14',
			percent: '30'
		},
		{
			option: '2 - 4 hours',
			ct: '14',
			percent: '30'
		},
		{
			option: '4 - 8 hours',
			ct: '14',
			percent: '30'
		},
		{
			option: '8 - 12 hours',
			ct: '14',
			percent: '30'
		}
	];
	// useEffect(() => {
	// 	fetch(`/api/questions/${questionId_txt}`)
	// 		.then(response => response.json())
	// 		.then(res => {
	// 			setQuestionTitle(res.text);
	// 			setQuestionTypeCode(res.questionTypeCode);
	// 		})
	// 		.catch(err => console.log(err));
	// }, [questionId_txt]);
	// const fetchData = async () => {
	// 	const data = await fetch('/api/surveys/daniel');
	// 	const dataJSON = await data.json();
	// 	console.log(dataJSON);
	// };
	// fetchData();
	// const fetchData = async () => { await fetch('https://pokeapi.co/api/v2/pokemon/ditto/');

	// fetchData().then(res => console.log(res));
	// 4578706C-6F72-6951-3130-313500000000.json
	// set1_txt / surveydataopt
	// 93ba8e14-4b05-11e9-af77-0a3056fd536a

	// useEffect(() => {
	// 	// console.log('comp loaded', questionTypeCode);
	// 	if (questionTypeCode !== '') {
	// 		switch (questionTypeCode) {
	// 			case 'RD':
	// 				setGraphType({ graphType: 'RD graph' });
	// 				// graphType = 'RD graph';
	// 				break;
	// 			case 'TA':
	// 				setGraphType({ graphType: 'TA graph' });
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 	}
	// 	// console.log('question: ', question);
	// }, [questionTypeCode]);
	// console.log(graph.graphType);
	return (
		<div className="p-3 mt-3 bg-green-200">
			<h5>{props.questionTitle}</h5>
			{/* <p>{graph.graphType}</p> */}
			{/* <Example /> */}
			<Table className="mt-4" striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Ct</th>
						<th>%</th>
					</tr>
				</thead>
				<tbody>
					{responseData.map((res: any, i: number) => (
						<tr key={i}>
							<td>{res.option}</td>
							<td>{res.ct}</td>
							<td>{res.percent}</td>
						</tr>
					))}
				</tbody>
			</Table>
			{/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
		</div>
	);
};
export default Response;
