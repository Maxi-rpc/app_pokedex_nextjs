// imports
import { ContainerMain, CardPoke } from "@/components";
// bootstrap
import { Row, Col } from "react-bootstrap";
// components pokemon container
export const PokemonContainer = ({ listPokemon }) => {
	const listCards = listPokemon.map((item, index) => (
		<Col key={index} className="my-2" md="3" sm="3">
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
