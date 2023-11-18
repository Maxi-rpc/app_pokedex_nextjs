"use client";
// imports
import Image from "next/image";
// bootstrap
import { Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
// Component header
const social = [
	{
		name: "github",
		url: "https://github.com/Maxi-rpc",
		icon: <i className="fa-brands fa-github"></i>,
	},
	{
		name: "linkedin",
		url: "https://www.linkedin.com/in/maximiliano-g-miranda/",
		icon: <i className="fa-brands fa-linkedin-in"></i>,
	},
	{
		name: "repo",
		url: "https://github.com/Maxi-rpc/app_pokedex_nextjs",
		icon: <i className="fa-solid fa-code"></i>,
	},
];

export const HeaderComponents = () => {
	const links = social;
	const listLinks = links.map((item, index) => (
		<Nav.Link key={index} href={item.url} target="_blank">
			{item.icon} {item.name}
		</Nav.Link>
	));

	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							{listLinks}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};
