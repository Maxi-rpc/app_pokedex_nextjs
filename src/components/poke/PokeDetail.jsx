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
		id: "id",
		name: "name",
		height: "height",
		weight: "weight",
		abilities: "abilities",
		sprites: "sprites",
		images: "images",
		stats: "stats",
		types: "types",
	});
	const [types, setTypes] = useState([]);

	const parserNum = (num = "") => {
		return num.toString().padStart(3, 0);
	};

	const listTypes = types.map((type) => (
		<>
			<h1>type</h1>
		</>
	));

	useEffect(() => {
		const get_data = async () => {
			const res = await get_pokemon_by_name(name);
			if (res.status == 200) {
				setData(res.datos);
				console.log(res.datos.types);
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
						<Card.Body>{data.height} mts</Card.Body>
					</Card>
					<Card>
						<Card.Header>weight</Card.Header>
						<Card.Body>{data.weight} lbs </Card.Body>
					</Card>
				</Col>
				<Col>
					<Carousel>
						<Carousel.Item>
							<Image src={data && data.images.front_default} alt="" />
							<Carousel.Caption>
								<h3>Normal</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<Image src={data.images.front_shiny} alt="" />
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
