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
// page Home
export default function Home() {
	const [search, setSearch] = useState("");
	const [listPokemonName, setListPokemonName] = useState([]);

	const handleSearch = (value) => {
		setSearch(value);
		console.log(search);
	};

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
