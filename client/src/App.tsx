import * as React from 'react';
import Person from './components/Person';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Person name="Daniel" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload. Yayy
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
