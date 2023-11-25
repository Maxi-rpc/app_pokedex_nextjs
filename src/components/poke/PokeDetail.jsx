"use client";
import { useEffect, useState } from "react";
// imports
// bootstrap
import { Card, Spinner, Badge, Row, Col } from "react-bootstrap";
// services
import { get_pokemon_by_name } from "@/services";
// components pokemon detail
export const PokeDetail = ({ name }) => {
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
				console.log(datos.sprites);
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
			<Card>
				<Spinner animation="border" variant="light"></Spinner>
			</Card>
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
			<Row className="justify-content-center">
				<Col xs="10" sm="10" md="8" lg="8">
					<Card>
						<Card.Header className="text-capitalize">
							#{data.id.toString().padStart(3, 0)} - {data.name}
						</Card.Header>
						<Card.Body>
							<Card.Img
								src={data.sprites.other["official-artwork"].front_default}
								alt={data.name}
								width="10rem"
							/>
							<Row className="justify-content-between">{listTypes}</Row>
							<Row>
								<h1>descr</h1>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};
