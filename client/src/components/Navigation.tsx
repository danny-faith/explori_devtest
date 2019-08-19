import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation: React.FC = () => {
	return (
		<Nav className="justify-content-center" activeKey="/">
			<Nav.Item>
				<Nav.Link href="/">Fruitful</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href="/surveys" eventKey="link-1">
					Your surveys
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default Navigation;
