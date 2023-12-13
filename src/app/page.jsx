"use client";
import { useEffect, useState } from "react";
// imports
import { Loader, NotifyAlerts, FormSearch } from "@/components";
// bootstrap
import { Form, Row } from "react-bootstrap";
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
			<h1>Home</h1>
			<FormSearch onSubmit={handleSubmit} />
		</>
	);
}
