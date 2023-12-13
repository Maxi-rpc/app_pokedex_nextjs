"use client";
// imports
import { useState } from "react";
// bootstrap
import { Row, Col, Form, InputGroup, Button } from "react-bootstrap";
// material icon
import SearchIcon from "@mui/icons-material/Search";
// FormSearch component
export const FormSearch = ({ onSubmit }) => {
	const [search, setSearch] = useState("");
	const [isValid, setIsValid] = useState(false);
	const handleSubmit = () => {
		if (search == "") {
			setIsValid(true);
		} else {
			onSubmit(search);
		}
	};

	const handleChange = (event) => {
		setIsValid(false);
		setSearch(event.target.value);
	};

	return (
		<>
			<Row className="justify-content-center">
				<Col xs="10" sm="6" md="6">
					<Form>
						<InputGroup className="mb-3">
							<Form.Control
								placeholder="Buscar pokemon"
								aria-label="Buscar pokemon"
								aria-describedby="basic-addon2"
								required
								isInvalid={isValid}
								onChange={handleChange}
							/>
							<Button
								onClick={handleSubmit}
								variant="outline-secondary"
								id="button-addon2"
							>
								<SearchIcon />
							</Button>
							<Form.Control.Feedback type="invalid">
								Completar el campo requerido.
							</Form.Control.Feedback>
						</InputGroup>
					</Form>
				</Col>
			</Row>
		</>
	);
};
