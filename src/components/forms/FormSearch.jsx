// imports
// material icon
import SearchIcon from "@mui/icons-material/Search";
// bootstrap
import { Row, Col, Button, Form, InputGroup } from "react-bootstrap";
// components form search
export const FormSearch = ({ handleChange }) => {
	return (
		<>
			<Col md="4">
				<InputGroup className="mb-3">
					<Form.Control
						placeholder="Buscar pokemon"
						aria-label="Buscar pokemon"
						aria-describedby="basic-addon2"
						id="searchPokemon"
						onChange={(e) => handleChange(e.target.value)}
					/>
					<Button variant="outline-primary" id="btn-addon2">
						<SearchIcon />
					</Button>
				</InputGroup>
			</Col>
		</>
	);
};
