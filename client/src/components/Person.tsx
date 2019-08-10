import React, { useEffect } from 'react';

interface IProps {
	name: string;
}

const Person: React.FC<IProps> = ({ name }) => {
	useEffect(() => {
		fetch('/question')
			.then(response => response.json())
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}, []);
	return <p>Person's name {name}</p>;
};

export default Person;
