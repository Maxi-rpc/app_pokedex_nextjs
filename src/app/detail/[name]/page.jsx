// imports
import { ContainerComponents, PokeDetail } from "@/components";
// bootstrap
import { Row } from "react-bootstrap";
// services
import { get_pokemons } from "@/services";
// page Detail

export async function generateStaticParams() {
	const { status, datos } = await get_pokemons();

	return datos.map((item) => ({
		name: item.name,
	}));
}

export default function Detail({ params }) {
	const { name } = params;
	return (
		<>
			<ContainerComponents>
				<main>
					<Row className="text-center my-2 text-capitalize">
						<h1>Detail: {name}</h1>
					</Row>
					<PokeDetail name={name} />
				</main>
			</ContainerComponents>
		</>
	);
}
