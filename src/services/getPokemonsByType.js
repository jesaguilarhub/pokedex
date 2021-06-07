const getPokemonByType = (searchByType) => {
	return fetch(`https://pokeapi.co/api/v2/type/${searchByType}`).then((res) => res.json());
};

export default getPokemonByType;
