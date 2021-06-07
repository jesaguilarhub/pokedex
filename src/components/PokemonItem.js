import { Link } from 'react-router-dom';
const PokemonItem = ({ url, pokemonName, src, types, hp, attack, defense, speed, color }) => {
	return (
		<div style={{ display: 'flex', backgroundColor: color }}>
			<div>
				<img src={src} alt="Pokemon" />
			</div>
			<div>
				<Link to={`${url}/pokemon/${pokemonName}`}>{pokemonName}</Link>
				<h3>Types: {types}</h3>
				<h3>HP: {hp}</h3>
				<h3>Attack: {attack}</h3>
				<h3>Defense: {defense}</h3>
				<h3>Speed: {speed}</h3>
			</div>
		</div>
	);
};

export default PokemonItem;
