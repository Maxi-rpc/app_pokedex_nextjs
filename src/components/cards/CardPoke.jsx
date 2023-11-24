"use client";
import { useEffect, useState } from "react";
// imports
import { CardMain } from "./CardMain";
// bootstrap
import { Card, Spinner } from "react-bootstrap";
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
		types: "",
	});

	useEffect(() => {
		const get_data = async (name) => {
			const { status, datos } = await get_pokemon_by_name(name);
			if (status == 200) {
				setData({
					id: datos.id,
					name: datos.name,
					sprites: datos.sprites,
					types: datos.types,
				});
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
			</CardMain>
		</>
	);
};
