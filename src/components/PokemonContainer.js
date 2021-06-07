import { useEffect, useState } from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import Pokemon from '../views/Pokemon';
import EncountersContainer from './EncountersContainer';
import getPokemonByName from '../services/getPokemonByName';

const PokemonContainer = () => {
	const { pokemonId } = useParams();
	const { url, path } = useRouteMatch();
	const [
		pokemon,
		setPokemon
	] = useState();
	useEffect(
		() => {
			if (pokemonId) {
				getPokemonByName(pokemonId).then((data) => setPokemon(data));
			}
		},
		[
			pokemonId
		]
	);
	let moves, abilities;
	if (pokemon) {
		moves = pokemon.moves.map((move, idx) => <li key={idx}>{move.move.name}</li>);
		abilities = pokemon.abilities.map((item, idx) => <li key={idx}>{item.ability.name}</li>);
	}

	return (
		<Switch>
			<Route path={`${path}/encounters`}>
				{pokemon && <EncountersContainer url={pokemon.location_area_encounters} />}
			</Route>
			<Route path={path}>
				{pokemon && <Pokemon pokemon={pokemon} url={url} moves={moves} abilities={abilities} />}
			</Route>
		</Switch>
	);
};

export default PokemonContainer;
