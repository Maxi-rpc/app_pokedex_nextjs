"use client";
// imports
import Image from "next/image";
import { User } from "@/constants/userconfig";
// bootstrap
import { Container, Row, Navbar, Nav } from "react-bootstrap";
// Component header
export const HeaderComponents = () => {
	const links = User.social;
	const listLinks = links.map((item, index) => (
		<Nav.Link
			key={index}
			href={item.url}
			target="_blank"
			className="d-flex align-items-center"
		>
			{item.icon} <span className="ps-2">{item.name}</span>
		</Nav.Link>
	));

	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">
						Pokedex - Next JS - Bootstrap
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">{listLinks}</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
