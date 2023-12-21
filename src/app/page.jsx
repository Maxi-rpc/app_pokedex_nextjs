"use client";
import { useEffect, useState } from "react";
// imports
import {
	Loader,
	NotifyAlerts,
	FormSearch,
	CardComponents,
	ButtonFilterComponents,
} from "@/components";
// bootstrap
import { Row, Col } from "react-bootstrap";
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

	const ListPokemons = listItems.map((item) => (
		<>
			<Col key={item.name} xs="6" sm="3" md="3" lg="2">
				<CardComponents name={item.name} />
			</Col>
		</>
	));

	useEffect(() => {
		const get_items = async () => {
			const res = await get_pokemons(0, 150);
			if (res.status == 200) {
				setListItems(res.datos);
			} else {
				setIsAlert({ show: true, msg: res.error });
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
			<ButtonFilterComponents />
			<div className="my-3"></div>
			<Row>{ListPokemons}</Row>
		</>
	);
}
