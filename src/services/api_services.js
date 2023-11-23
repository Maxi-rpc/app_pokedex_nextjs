// imports
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/";
const API_POKEMON = API_URL + "pokemon/";

export const get_pokemons = (offset = 0, limit = 10) => {
	const offse = offset ? offset : 0;
	const limite = limit ? limit : 1010;
	let API_POKEMONS = `https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${offse}`;
	return axios.get(API_POKEMONS);
};

export const get_pokemon_by_name = async (pokename = "lucario") => {
	const res = await axios.get(API_POKEMON + pokename);
	const { status, data } = res;

	const { id, name, height, weight, abilities, sprites, stats, types } = data;

	const datos = {
		id: id,
		name: name,
		height: height,
		weight: weight,
		abilities: abilities,
		sprites: sprites,
		stats: stats,
		types: types,
	};
	return { stats, datos };
};
