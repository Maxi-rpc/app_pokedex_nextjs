"use client";
// imports
import Image from "next/image";
// material icon
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
// bootstrap
import { Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";
// Component header
const social = [
	{
		name: "Github",
		url: "https://github.com/Maxi-rpc",
		icon: <GitHubIcon />,
	},
	{
		name: "Linkedin",
		url: "https://www.linkedin.com/in/maximiliano-g-miranda/",
		icon: <LinkedInIcon />,
	},
	{
		name: "Repositorio",
		url: "https://github.com/Maxi-rpc/app_pokedex_nextjs",
		icon: <CodeIcon />,
	},
];

export const HeaderComponents = () => {
	const links = social;
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
