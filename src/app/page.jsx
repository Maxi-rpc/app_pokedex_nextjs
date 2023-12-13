"use client";
import { useEffect, useState } from "react";
// imports
import { Loader, NotifyAlerts, FormSearch } from "@/components";
// bootstrap
import { Row, Col, Card } from "react-bootstrap";
// services
import { get_pokemons } from "@/services";
// page Home
export default function Home() {
	const [isAlert, setIsAlert] = useState({
		show: false,
		msg: "",
	});
	const [listItems, setListItems] = useState([]);
	const [searchName, setSearchName] = useState("");

	const handleSubmit = (value) => {
		console.log(value);
	};

	useEffect(() => {
		const get_items = async () => {
			const data = await get_pokemons();
			if (data.status == 200) {
				setListItems(data.datos);
			} else {
				setIsAlert({ show: true, msg: data.error });
			}
		};
		get_items();
	}, []);

	if (listItems.length == 0) {
		return (
			<>
				<Loader />
			</>
		);
	}
	return (
		<>
			{isAlert.show && <NotifyAlerts message={isAlert.msg} />}
			<h1 className="text-center my-3">Pokedex Completa</h1>
			<FormSearch onSubmit={handleSubmit} />
			<div className="my-3"></div>
			<Row>
				<Col xs="3" sm="3" md="4">
					<Card>
						<h1>cardpokemon</h1>
					</Card>
				</Col>
			</Row>
		</>
	);
}
