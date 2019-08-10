import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
	return (
		<div>
			<h1>Welcome to Fruitful Surveys</h1>
			<Link to="/surveys">View your surveys</Link>
		</div>
	);
}
