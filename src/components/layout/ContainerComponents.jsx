// imports
// bootstrap
import { Container } from "react-bootstrap";
// Component container
export const ContainerComponents = ({ children }) => {
	return (
		<>
			<Container fluid>{children}</Container>
		</>
	);
};
