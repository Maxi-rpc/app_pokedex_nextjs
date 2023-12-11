"use client";
import { useEffect, useState } from "react";
// imports
import { Loader, NotifyAlerts } from "@/components";
// bootstrap
import { Row } from "react-bootstrap";
// services
import { get_pokemons } from "@/services";
// page Home
export default function Home() {
	const [isAlert, setIsAlert] = useState({
		show: false,
		msg: "",
	});
	const [listItems, setListItems] = useState([]);

	useEffect(() => {
		const get_items = async () => {
			const data = await get_pokemons();
			if (data.status == 200) {
				setIsAlert({ show: true, msg: data.status });
			}
		};
		get_items();
	}, []);

	return (
		<>
			{isAlert.show && <NotifyAlerts message={isAlert.msg} />}
			<h1>Home</h1>
		</>
	);
}
