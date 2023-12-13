// imports
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/";
const API_POKEMON = API_URL + "pokemon/";

export const get_pokemons = async (offset, limit) => {
	const offse = offset ? offset : 0;
	const limite = limit ? limit : 9;
	const API_POKEMONS = `https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${offse}`;
	try {
		const res = await axios.get(API_POKEMONS);
		const { status } = res;
		const { results } = res.data;

		const datos = results;
		return { status, datos };
	} catch (error) {
		const status = 404;
		return { status, error };
	}
};

export const get_pokemon_by_name = async (pokename = "lucario") => {
	try {
		const res = await axios.get(API_POKEMON + pokename);
		const { status, data } = res;

		const { id, name, height, weight, abilities, sprites, stats, types } = data;
		const { other } = sprites;
		const images = other.home;

		const datos = {
			id: id,
			name: name,
			height: height,
			weight: weight,
			abilities: abilities,
			sprites: sprites,
			images: images,
			stats: stats,
			types: types,
		};
		return { status, datos };
	} catch (error) {
		const status = 404;
		return { status, error };
	}
};
