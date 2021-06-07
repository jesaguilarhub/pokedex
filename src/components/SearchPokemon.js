import { useState } from 'react';

const SearchPokemon = ({ handleSearchByName, handleSearchByType, typeOptions }) => {
	const [
		value,
		setValue
	] = useState('');

	return (
		<div>
			<select onChange={(e) => handleSearchByType(e.target.value)}>
				<option value="">--Select an option</option>
				{typeOptions}
			</select>
			<input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search by name" />
			<button
				onClick={() => {
					handleSearchByName(value.toLowerCase().trim());
				}}
			>
				Search
			</button>
		</div>
	);
};

export default SearchPokemon;
