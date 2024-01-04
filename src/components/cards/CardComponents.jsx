"use client";
// imports
import { useState, useEffect } from "react";
// bootstrap
import { Row, Col, Card, Carousel, Image } from "react-bootstrap";
// services
import { get_pokemon_thumbail_by_name } from "@/services";
// Card Components
export const CardComponents = ({ name }) => {
	const [listSprites, setListSprites] = useState([]);
	const [details, setDetails] = useState({
		id: "",
		name: "",
	});

	const parserName = (id, name) => {
		const parseText = `#${id.toString().padStart(3, 0)} - ${name}`;
		return parseText;
	};

	const ListSprites = listSprites.map((sprite, index) => (
		<Carousel.Item key={index} className="text-center">
			<Image fluid src={sprite.front} alt={index} width={100} />
		</Carousel.Item>
	));

	useEffect(() => {
		const get_data = async () => {
			const res = await get_pokemon_thumbail_by_name(name);
			if (res.status == 200) {
				setListSprites(res.datos.sprites);
				setDetails({
					id: res.datos.id,
					name: res.datos.name,
				});
				console.log(res.datos);
			} else {
				console.log("error en cardcomponents");
			}
		};
		get_data();
	}, [name]);

	return (
		<>
			<Card className="my-2">
				<Carousel className="p-4">{ListSprites}</Carousel>
				<Card.Body></Card.Body>
				<Card.Footer className="text-muted text-capitalize">
					{parserName(details.id, details.name)}
				</Card.Footer>
			</Card>
		</>
	);
};
