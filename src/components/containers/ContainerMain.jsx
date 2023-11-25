"use client";
// imports
// bootstrap
import { Row, Col, Card } from "react-bootstrap";
// components container main
export const ContainerMain = ({ children }) => {
	return (
		<>
			<Row className="my-2">
				<Col md="12">
					<Card className="border border-0">
						<Card.Body>
							<Row>{children}</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};
