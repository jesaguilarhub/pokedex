import { Link } from 'react-router-dom';
const PokemonUniqueItem = ({ url, pokemonName, src, types, hp, attack, defense, speed, color }) => {
	return (
		<div
			style={{
				backgroundColor : color,
				height          : 500,
				width           : '100%',
				margin          : 20,
				borderRadius    : '10px'
			}}
		>
			<div
				style={{
					width              : '100%',
					backgroundImage    : `url(${src})`,
					backgroundSize     : 'contain',
					backgroundPosition : 'center',
					backgroundRepeat   : 'no-repeat'
				}}
			>
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

export default PokemonUniqueItem;
