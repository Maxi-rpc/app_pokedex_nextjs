// imports
// bootstrap
import { Col, Row, Container, Spinner } from "react-bootstrap";
// components loader
export const Loader = () => {
	return (
		<>
			<Row
				style={{ minHeight: 600 }}
				className="justify-content-center text-center align-content-center"
			>
				<Col md="12">
					<Spinner
						style={{ width: "10rem", height: "10rem" }}
						animation="border"
						variant="primary"
					></Spinner>
				</Col>
			</Row>
		</>
	);
};
