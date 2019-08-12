import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Table } from 'react-bootstrap';

interface IProps {
	question: string;
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

const Response: React.FC<IProps> = ({ question }) => {
	return (
		<div className="p-3 bg-green-200">
			<h2>{question}</h2>
			<Table className="mt-4" striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Ct</th>
						<th>%</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Yes</td>
						<td>22</td>
						<td>33</td>
					</tr>
					<tr>
						<td>No</td>
						<td>33</td>
						<td>22</td>
					</tr>
				</tbody>
			</Table>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};
export default Response;
