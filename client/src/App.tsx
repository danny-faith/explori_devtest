import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Person from './components/Person';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
	return (
		<Router>
			<div className="App" />
		</Router>
	);
};

export default App;
