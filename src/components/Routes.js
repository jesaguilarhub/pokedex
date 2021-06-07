import { Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from '../views/Home';
import PokedexContainer from './PokedexContainer';
import NoMatch from '../views/NoMatch';
const Routes = () => {
	return (
		<Switch>
			<Route path="/home">
				<Home />
			</Route>

			<ProtectedRoute path="/pokedex">
				<PokedexContainer />
			</ProtectedRoute>

			<Route path="/" exact>
				<Redirect to="/home" />
			</Route>

			<Route path="*">
				<NoMatch />
			</Route>
		</Switch>
	);
};

export default Routes;
