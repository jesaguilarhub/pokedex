import { useState, useEffect } from 'react';
import PokemonItem from './PokemonItem';

const colors = {
	normal   : '#ffc8dd',
	fighting : '#edf6f9',
	flying   : '#e76f51',
	poison   : '#14213d',
	ground   : '#bc6c25',
	rock     : '#b7b7a4',
	bug      : '#ccd5ae',
	ghost    : '#6930c3',
	steel    : '#6d6875',
	fire     : '#f4a261',
	water    : '#457b9d',
	grass    : '#718355',
	electric : '#fca311',
	psychic  : '#480ca8',
	ice      : '#bde0fe',
	dragon   : '#e9c46a',
	dark     : '#370617',
	fairy    : '#ffadad',
	unknown  : '#22223b',
	shadow   : '#312244'
};
const PokemonItemContainer = ({ url, pokemonUrl }) => {
	const [
		pokemon,
		setPokemon
	] = useState(null);
	useEffect(
		() => {
			if (pokemonUrl) {
				fetch(pokemonUrl).then((res) => res.json()).then((data) => {
					setPokemon(data);
				});
			}
		},
		[
			pokemonUrl
		]
	);
	return (
		<div>
			{pokemon && (
				<PokemonItem
					key={pokemon.name}
					url={url}
					pokemonName={pokemon.name}
					src={pokemon.sprites.other['official-artwork'].front_default}
					types={pokemon.types[0].type.name}
					hp={pokemon.stats[0].base_stat}
					attack={pokemon.stats[1].base_stat}
					defense={pokemon.stats[2].base_stat}
					speed={pokemon.stats[5].base_stat}
					color={colors[pokemon.types[0].type.name]}
				/>
			)}
		</div>
	);
};

export default PokemonItemContainer;
