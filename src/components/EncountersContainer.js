import { useEffect, useState } from 'react';
import getEncounters from '../services/getEncounters';
const EncountersContainer = ({ url }) => {
	const [
		encounters,
		setEncounters
	] = useState([]);
	useEffect(
		() => {
			if (url) {
				getEncounters(url).then((data) => {
					setEncounters(data);
				});
			}
		},
		[
			url
		]
	);
	const listEncounters = encounters.map((encounter, idx) => {
		return <li key={idx}>{encounter.location_area.name}</li>;
	});

	return <div>{listEncounters ? listEncounters : <h3>Loading...</h3>}</div>;
};

export default EncountersContainer;
