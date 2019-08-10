import React from 'react';

interface IProps {
	surveyTitle: string;
	surveyLink: string;
}

const SurveyListItem: React.FC<IProps> = ({ surveyTitle, surveyLink }) => {
	return (
		<li>
			{surveyTitle}
			{surveyLink}
		</li>
	);
};

export default SurveyListItem;
