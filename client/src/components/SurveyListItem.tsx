import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IProps {
	surveyTitle: string;
	surveyId_txt: string;
}

const SurveyListItem: React.FC<IProps> = ({ surveyTitle, surveyId_txt }) => {
	return (
		<ListGroup.Item>
			{surveyTitle}
			<Link
				to={{
					pathname: `/surveys/${surveyId_txt}`,
					state: { title: surveyTitle }
				}}
			>
				{' '}
				View report {surveyId_txt}
			</Link>
		</ListGroup.Item>
	);
};

export default SurveyListItem;
