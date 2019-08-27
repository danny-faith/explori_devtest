import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import YourSurveys from './pages/YourSurveys';
import Dashboard from './pages/Dashboard';
import SurveyResponses from './pages/SurveyResponses';

const App: React.FC = () => {
	return (
		<Router>
			<Navigation />
			<Container>
				<Row>
					<Col>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/surveys" component={YourSurveys} />
						<Route
							exact
							path="/surveys/:surveyId_txt"
							component={SurveyResponses}
						/>
					</Col>
				</Row>
			</Container>
		</Router>
	);
};

export default App;
