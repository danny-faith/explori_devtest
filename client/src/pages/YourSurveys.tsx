import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import SurveyListItem from '../components/SurveyListItem';
import Pagination from '../components/Pagination';

interface IProps {}

interface ISurvey {
	surveyId_txt: string;
	name: string;
}

const YourSurveys: React.FC = () => {
	const [surveys, setSurveys] = useState<ISurvey[]>([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [surveysPerPage, setSurveysPerPage] = useState(10);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	useEffect(() => {
		fetch('/api/surveys/all')
			.then(response => response.json())
			.then(res => {
				setSurveys(res);
			})
			.catch(err => console.log(err));
	}, []);

	const indexOfLastPost = currentPage * surveysPerPage;
	const indexOfFirstPost = indexOfLastPost - surveysPerPage;
	const currentSurveys = surveys.slice(indexOfFirstPost, indexOfLastPost);
	return (
		<React.Fragment>
			<ListGroup className="my-4">
				{currentSurveys.map((survey: ISurvey, i: number) => (
					<SurveyListItem
						surveyTitle={survey.name}
						surveyId_txt={survey.surveyId_txt}
						key={i}
					/>
				))}
			</ListGroup>
			<Pagination
				surveysPerPage={surveysPerPage}
				totalSurveys={surveys.length}
				paginate={paginate}
			/>
		</React.Fragment>
	);
};

export default YourSurveys;
