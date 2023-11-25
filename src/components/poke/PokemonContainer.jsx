"use client";
import { useEffect, useState } from "react";
// imports
import { ContainerMain, CardPoke } from "@/components";
// bootstrap
import { Row, Col } from "react-bootstrap";
// components pokemon container
export const PokemonContainer = ({ listPokemon }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(listPokemon);
	}, [listPokemon]);

	const listCards = items.map((item) => (
		<Col key={item.name} className="my-2" md="3" sm="3">
			<CardPoke name={item.name} />
		</Col>
	));

	return (
		<>
			<ContainerMain>
				<h1>Pokemon container listado de todos</h1>
				<Row>{listCards}</Row>
			</ContainerMain>
		</>
	);
};
