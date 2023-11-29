"use client";
import { useEffect, useState } from "react";
// imports
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
// bootstrap
import Carousel from "react-bootstrap/Carousel";
import { Card, Spinner, Badge, Row, Col, Image, Button } from "react-bootstrap";
// services
import { get_pokemon_by_name } from "@/services";
// components pokemon detail
export const PokeDetail = ({ name }) => {
	const [data, setData] = useState({
		id: "",
		name: "",
		height: "",
		weight: "",
		sprites: "",
		images: "",
		stats: "",
	});
	const [types, setTypes] = useState([]);
	const [abilities, setAbilities] = useState([]);

	const parserNum = (num) => {
		return num.toString().padStart(3, 0);
	};

	useEffect(() => {
		const get_data = async () => {
			const { status, datos } = await get_pokemon_by_name(name);
			if (status == 200) {
				console.log(datos);
				setData({
					id: datos.id,
					name: datos.name,
					sprites: datos.sprites,
					images: datos.images,
				});
				setTypes(datos.types);
				setAbilities(datos.abilities);
			}
		};
		get_data();
	}, [name]);

	if (name === "") {
		<>
			<Card>
				<Spinner animation="border" variant="light"></Spinner>
			</Card>
		</>;
	}

	const listTypes = types.map((tp, index) => (
		<Col key={index} xs="6" sm="6" md="6" className="text-center">
			<Badge bg="primary">{tp.type.name}</Badge>
		</Col>
	));

	const listAbilities = abilities.map((ab, index) => (
		<h6 key={index}>
			{ab.ability.name} {ab.is_hidden == true && "(Hidden)"}
		</h6>
	));

	return (
		<>
			<Row className="text-capitalize mx-auto">
				<Col xs="4" sm="4" md="4" lg="4">
					N#. {parserNum(data.id)}
				</Col>
				<Col xs="4" sm="4" md="4" lg="4">
					{data.name}
				</Col>
				<Col xs="4" sm="4" md="4" lg="4">
					<Button variant="primary" size="sm">
						<MaleIcon />
					</Button>
					<Button variant="danger" size="sm">
						<FemaleIcon />
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card>
						<Card.Header>height</Card.Header>
						<Card.Body></Card.Body>
					</Card>
					<Card>
						<Card.Header>weight</Card.Header>
						<Card.Body></Card.Body>
					</Card>
				</Col>
				<Col>
					<Carousel>
						<Carousel.Item>
							<Image src={data.sprites.front_default} alt="" />
							<Carousel.Caption>
								<h3>Normal</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<Image src={data.sprites.front_default} alt="" />
							<Carousel.Caption>
								<h3>Shiny</h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
				<Col>
					<h6>types</h6>
				</Col>
			</Row>
		</>
	);
};
