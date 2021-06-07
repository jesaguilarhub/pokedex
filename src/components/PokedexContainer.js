import { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';
import getPokemonTypes from '../services/getPokemonTypes';
import getPokemonsByType from '../services/getPokemonsByType';
import getPokemonByName from '../services/getPokemonByName';
import SearchPokemon from './SearchPokemon';
import Pokedex from '../views/Pokedex';
import PokemonContainer from './PokemonContainer';
import PokemonItemContainer from './PokemonItemContainer';
import PokemonItem from './PokemonItem';
import Pagination from './Pagination';
import PokemonUniqueItem from './PokemonUniqueItem';
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
const PokedexContainer = () => {
	const { url, path } = useRouteMatch();
	const { signOut } = useAuth();
	const [
		pokemonTypes,
		setPokemonTypes
	] = useState([]);

	const [
		queryByType,
		setQueryByType
	] = useState('');
	const [
		queryByName,
		setQueryByName
	] = useState('');

	const [
		pokemons,
		setPokemons
	] = useState([]);

	const [
		pokemon,
		setPokemon
	] = useState(null);

	const [
		pokemonsOnPage,
		setPokemonsOnPage
	] = useState([]);
	const [
		currentPage,
		setCurrentPage
	] = useState(1);

	useEffect(
		() => {
			if (currentPage === 1) {
				setPokemonsOnPage(pokemons.slice(0, 4));
				return;
			}
			const offset = currentPage * 4;
			setPokemonsOnPage(pokemons.slice(offset - 4, offset));
		},
		[
			currentPage,
			pokemons
		]
	);

	useEffect(() => {
		getPokemonTypes().then(({ results }) => {
			setPokemonTypes(results.map((pokemonType) => pokemonType.name));
		});
	}, []);

	useEffect(
		() => {
			if (queryByType) {
				getPokemonsByType(queryByType).then((data) => {
					setPokemons(data.pokemon);
					setPokemon(null);
				});
			}
		},
		[
			queryByType
		]
	);

	useEffect(
		() => {
			if (queryByName) {
				getPokemonByName(queryByName)
					.then((data) => {
						setPokemon(data);
						setPokemons([]);
					})
					.catch(() => setPokemon(null));
			}
		},
		[
			queryByName
		]
	);

	const handlePageChanged = (page) => {
		setCurrentPage(page);
	};

	const typeOptions = pokemonTypes.map((type, idx) => {
		return (
			<option key={idx} value={type}>
				{type}
			</option>
		);
	});

	const pokemonsList = pokemonsOnPage.map((pokemon, idx) => {
		return <PokemonItemContainer key={idx} url={url} pokemonUrl={pokemon.pokemon.url} />;
	});
	return (
		<div>
			<div>
				<button
					onClick={() => {
						signOut(() => {});
					}}
				>
					Log Out
				</button>
			</div>

			<Switch>
				<Route path={`${path}/pokemon/:pokemonId`}>
					<Link to={`${path}`}>👈 Back</Link>
					<PokemonContainer />
				</Route>
				<Route path={path}>
					<SearchPokemon
						handleSearchByName={setQueryByName}
						handleSearchByType={setQueryByType}
						typeOptions={typeOptions}
					/>
					{pokemonsList && (
						<div>
							<Pokedex pokemonsList={pokemonsList} />{' '}
							<Pagination total={Math.ceil(pokemons.length / 4)} onPageChange={handlePageChanged} />
						</div>
					)}
					{pokemon && (
						<PokemonUniqueItem
							url={url}
							pokemonName={pokemon.name}
							src={pokemon.sprites.other['official-artwork'].front_default}
							types={pokemon.types.map((type) => type.type.name).join(', ')}
							hp={pokemon.stats[0].base_stat}
							attack={pokemon.stats[1].base_stat}
							defense={pokemon.stats[2].base_stat}
							speed={pokemon.stats[5].base_stat}
							color={colors[pokemon.types[0].type.name]}
						/>
					)}
				</Route>
			</Switch>
		</div>
	);
};

export default PokedexContainer;
