const Pagination = ({ total, onPageChange }) => {
	let map = [];
	for (let i = 0; i < total; i++) {
		map = [
			...map,
			i + 1
		];
	}

	return (
		<div
			style={{
				display        : 'flex',
				flexDirection  : 'row',
				justifyContent : 'center'
			}}
		>
			{map.map((value) => (
				<button key={value} onClick={() => onPageChange(value)}>
					{value}
				</button>
			))}
		</div>
	);
};

export default Pagination;
