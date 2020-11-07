function MenuButton(props) {
	const style = !props.isOpened ? ('bg-secondary-100 text-white border-secondary-100') : ('bg-white text-secondary-100 border-secondary-200 ');

	return(
		<div className="md:hidden">
			<button className={ `py-1 px-2 rounded border-2 ${style}` } onClick={props.handleToggleMenu}>
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
			</button>
		</div>
	);
}

export default MenuButton;