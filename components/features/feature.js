function Feature({feature}) {
	const { name, description } = feature;

	return(
		<div className="text-primary-100 flex justify-start items-center">
			<div>
				<img src={`/icons/${name}.svg`} alt={name} className="w-48"/>
			</div>
			<div>
				<div className="font-semibold text-lg first">
					{name}
				</div>
				<div className="text-sm font-light first">
					{description}
				</div>
			</div>
		</div>
	);
}

export default Feature;