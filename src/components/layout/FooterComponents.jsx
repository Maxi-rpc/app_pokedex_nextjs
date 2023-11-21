"use client";
// imports
import { User } from "@/constants/userconfig";
// bootstrap
import { Container, Navbar } from "react-bootstrap";
// Component Footer
export const FooterComponents = () => {
	return (
		<>
			<Navbar fixed="bottom" className="bg-body-tertiary">
				<Container className="justify-content-center">
					<p className="mb-0">Creado por {User.creator}</p>
				</Container>
			</Navbar>
		</>
	);
};
