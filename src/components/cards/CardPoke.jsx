"use client";
import { useEffect, useState } from "react";
// imports
import { CardMain } from "./CardMain";
// bootstrap
import { Card, Spinner, Badge, Row, Col } from "react-bootstrap";
// services
import { get_pokemon_by_name } from "@/services";
// components cardpoke
export const CardPoke = ({ name, url }) => {
	const [data, setData] = useState({
		id: "",
		name: "",
		height: "",
		weight: "",
		abilities: "",
		sprites: "",
		stats: "",
	});
	const [types, setTypes] = useState([]);

	useEffect(() => {
		const get_data = async () => {
			const { status, datos } = await get_pokemon_by_name(name);
			if (status == 200) {
				setData({
					id: datos.id,
					name: datos.name,
					sprites: datos.sprites,
				});
				setTypes(datos.types);
			}
		};
		get_data();
	}, [name]);

	if (name === "") {
		<>
			<CardMain>
				<Spinner animation="border" variant="light"></Spinner>
			</CardMain>
		</>;
	}

	const listTypes = types.map((tp, index) => (
		<Col
			key={index}
			xs="6"
			sm="6"
			md="6"
			className="text-center text-capitalize"
		>
			<Badge bg="primary">{tp.type.name}</Badge>
		</Col>
	));

	return (
		<>
			<CardMain>
				<Card.Header className="text-capitalize">
					#{data.id.toString().padStart(3, 0)} - {data.name}
				</Card.Header>
				<Card.Body>
					<Card.Img
						src={data.sprites.front_default}
						alt={data.name}
						width="150rem"
					/>
				</Card.Body>
				<Card.Footer>
					<Row className="justify-content-between">{listTypes}</Row>
				</Card.Footer>
			</CardMain>
		</>
	);
};
