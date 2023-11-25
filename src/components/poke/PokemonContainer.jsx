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
		<Col key={item.name} className="my-2" xs="6" sm="3" md="3" lg="2">
			<CardPoke name={item.name} />
		</Col>
	));

	return (
		<>
			<ContainerMain>
				<h1>Pokemon container listado de todos</h1>
				<Row className="justify-content-center">{listCards}</Row>
			</ContainerMain>
		</>
	);
};
