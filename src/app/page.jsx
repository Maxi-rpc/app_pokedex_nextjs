"use client";
import { useEffect, useState } from "react";
// imports
import {
	ContainerComponents,
	FormSearch,
	Loader,
	ContainerMain,
} from "@/components";
// bootstrap
import { Row } from "react-bootstrap";
// services
import { get_pokemon_by_name, get_pokemons } from "@/services";
// page Home
export default function Home() {
	const [search, setSearch] = useState("");
	const [listPokemonName, setListPokemonName] = useState([]);

	const handleSearch = (value) => {
		setSearch(value);
	};

	useEffect(() => {
		const get_list = async () => {
			const { status, datos } = await get_pokemons();
			if (status == 200) {
				setListPokemonName(datos);
			}
		};
		get_list();
	}, []);

	if (listPokemonName.length == 0) {
		return (
			<>
				<ContainerComponents>
					<Loader />
				</ContainerComponents>
			</>
		);
	}

	return (
		<>
			<ContainerComponents>
				<main>
					<Row className="text-center my-2">
						<h1>Home</h1>
					</Row>
					<FormSearch handleChange={handleSearch} />
					<ContainerMain listPokemon={listPokemonName} />
				</main>
			</ContainerComponents>
		</>
	);
}
