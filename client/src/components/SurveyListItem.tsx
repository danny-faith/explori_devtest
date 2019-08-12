import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IProps {
	surveyTitle: string;
	surveyLink: string;
}

const SurveyListItem: React.FC<IProps> = ({ surveyTitle, surveyLink }) => {
	return (
		<ListGroup.Item>
			{surveyTitle}
			<Link to={surveyLink}> View report</Link>
		</ListGroup.Item>
	);
};

export default SurveyListItem;
