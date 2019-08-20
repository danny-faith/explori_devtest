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

const Response: React.FC<IResponseProps> = props => {
	function fun() {
		return 'hello';
	}

	const responseData = [
		{
			optionSetTxt: '1 - 2 hours',
			ct: '14',
			percent: '30'
		},
		{
			optionSetTxt: '2 - 4 hours',
			ct: '14',
			percent: '30'
		},
		{
			optionSetTxt: '4 - 8 hours',
			ct: '14',
			percent: '30'
		},
		{
			optionSetTxt: '8 - 12 hours',
			ct: '14',
			percent: '30'
		}
	];

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

	// function to fix number to two decimal places
	function toFixed(x: number): string {
		return x.toFixed(2);
	}
	// calculate total number of responses for use with caluclating percentages
	const totalResponses = props.responses
		.map((response: any) => response['COUNT(id)'])
		.reduce((a, b) => a + b, 0);
	return (
		<div className="p-3 mt-3 bg-green-200">
			<h5>{props.questionTitle}</h5>
			{/* <p>{graph.graphType}</p> */}
			{/* <Example /> */}
			<Table className="mt-4" striped bordered hover>
				<thead>
					<tr>
						<th className="w-1/2">#</th>
						<th>Ct</th>
						<th>%</th>
					</tr>
				</thead>
				<tbody>
					{props.responses.map((res: any, i: number) => (
						<tr key={i}>
							<td>{res.optionSetTxt}</td>
							<td>{res['COUNT(id)']}</td>
							<td>{toFixed((res['COUNT(id)'] / totalResponses) * 100)}</td>
						</tr>
					))}
				</tbody>
			</Table>
			{/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
		</div>
	);
};
export default Response;
