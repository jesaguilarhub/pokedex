const getPokemonTypes = () => {
	return fetch('https://pokeapi.co/api/v2/type').then((res) => res.json());
};

export default getPokemonTypes;
