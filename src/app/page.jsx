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
import { get_pokemon_by_name } from "@/services";
// page Home
export default function Home() {
	const [search, setSearch] = useState("");
	const [listPokemonName, setListPokemonName] = useState([]);

	const handleSearch = (value) => {
		setSearch(value);
	};

	useEffect(() => {
		const testget = async () => {
			await get_pokemon_by_name();
		};
		testget();
	}, []);

	if (!listPokemonName) {
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
					<ContainerMain />
				</main>
			</ContainerComponents>
		</>
	);
}
