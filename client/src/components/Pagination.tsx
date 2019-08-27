import React from 'react';
import { IPaginationProps } from '../interfaces/interfaces';

const Pagination: React.FC<IPaginationProps> = ({
	surveysPerPage,
	totalSurveys,
	paginate
}) => {
	const pageNumbers = [];

	for (let i = 1; i < Math.ceil(totalSurveys / surveysPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map(number => (
					<li key={number} className="page-item">
						<a
							href="!#"
							onClick={e => {
								e.preventDefault();
								paginate(number);
							}}
							className="page-link"
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
