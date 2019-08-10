import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import YourSurveys from './pages/YourSurveys';

const App: React.FC = () => {
	return (
		<Router>
			<Navigation />
			<Container>
				<Row>
					<Col>
						<Route exact path="/your-surveys" component={YourSurveys} />
					</Col>
				</Row>
			</Container>
		</Router>
	);
};

export default App;
