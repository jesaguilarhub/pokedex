const getEncounters = (url) => {
	return fetch(url).then((res) => res.json());
};

export default getEncounters;
