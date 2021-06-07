const Pagination = ({ total, onPageChange, current }) => {
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
			{map.map((value) => {
				const bg = value === current ? 'red' : '';
				return (
					<button key={value} onClick={() => onPageChange(value)} style={{ backgroundColor: bg }}>
						{value}
					</button>
				);
			})}
		</div>
	);
};

export default Pagination;
