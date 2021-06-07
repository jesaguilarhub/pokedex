import { HashRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Router>
					<Routes />
				</Router>
			</header>
		</div>
	);
}

export default App;
