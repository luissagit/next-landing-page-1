function HeroText({ detail }) {
	const { title, subtitle, description, buttons } = detail;

	return(
		<div className="text-primary-100 text-center md:grid place-items-center md:text-left">
			<div>
				<h3 className="text-xl first">
					{ subtitle }
				</h3>
				<h2 className="font-bold text-4xl first">
					{ title }
				</h2>
				<p className="font-light first">
					{ description }
				</p>
				{
					buttons.map((button, index) => {
						return(
							<button className={`${button.style} first`} key={index}>
								{ button.name }
							</button>
						);
					})
				}
			</div>
		</div>
	);
}

export default HeroText;