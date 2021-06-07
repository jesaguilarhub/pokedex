import { Link } from 'react-router-dom';
const Pokemon = ({ pokemon, url, moves, abilities }) => {
	return (
		<div style={{ display: 'flex', width: '100%' }}>
			<div style={{ width: '50%', height: '100%' }}>
				<img
					src={pokemon.sprites.other.dream_world.front_default}
					alt="Pokemon"
					style={{ width: '100%', height: '100%' }}
				/>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div>
					<h1>Name: {pokemon.name}</h1>
					<ul style={{ listStyle: 'none' }}>
						<li>Types: {pokemon.types[0].type.name}</li>
						<li>HP: {pokemon.stats[0].base_stat}</li>
						<li>Attack: {pokemon.stats[1].base_stat}</li>
						<li>Defense: {pokemon.stats[2].base_stat}</li>
						<li>Speed: {pokemon.stats[5].base_stat}</li>
					</ul>
				</div>
				<hr />
				<div>
					<h3>
						Moves: <ul>{moves}</ul>
					</h3>
					<h3>
						Abilities: <ul>{abilities}</ul>
					</h3>
					<ul>
						<li>Height: {pokemon.height}</li>
						<li>Weight: {pokemon.weight / 10}kg</li>
						<li>Number: {pokemon.order}</li>
						<li>
							<Link to={`${url}/encounters`}>Encounters</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Pokemon;
