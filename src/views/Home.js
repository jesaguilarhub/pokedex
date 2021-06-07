import { useHistory } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';
import { useForm } from 'react-hook-form';
const Home = () => {
	const { signIn, setEntrenadorPokemon } = useAuth();
	const history = useHistory();
	const { handleSubmit, register } = useForm();
	const onLogin = ({ pokemonTrainer }) => {
		setEntrenadorPokemon(pokemonTrainer);
		signIn(() => history.push('/pokedex'));
	};
	return (
		<form onSubmit={handleSubmit(onLogin)}>
			<input type="text" {...register('pokemonTrainer')} placeholder="Pokemon Trainer" />

			<button>Login</button>
		</form>
	);
};

export default Home;
