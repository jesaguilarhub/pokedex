const Pagination = ({ total, onPageChange, current }) => {
	let map = [];
	let start = current - 4;
	let end = current + 5;
	if (start < 1) {
		end += Math.abs(start) + 1;
		start = 1;
	}
	else if (end > total) {
		start -= end - total;
		end = total;
	}
	for (let i = start; i <= end; i++) {
		map = [
			...map,
			i
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
