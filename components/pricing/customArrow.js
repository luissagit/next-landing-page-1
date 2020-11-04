function CustomLeftArrow(props) {
	const { className, style, onClick, arrow } = props;
	return(
		<div className={className} onClick={onClick}>
			<div>
				<svg className="w-6 h-6" fill="none" stroke="#78C2FF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
			</div>
		</div>
	);
}

function CustomRightArrow(props) {
	const { className, style, onClick, arrow } = props;
	return(
		<div className={className} onClick={onClick}>
			<div>
				<svg className="w-6 h-6" fill="none" stroke="#78C2FF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
			</div>
		</div>
	);
}

export { CustomLeftArrow, CustomRightArrow };