function HeroText({ detail }) {
	const { title, subtitle, description, buttons } = detail;

	return(
		<div className="text-primary-100 text-center">
			<div className="text-xl first">
				{ subtitle }
			</div>
			<div className="font-bold text-4xl first">
				{ title }
			</div>
			<div className="font-light first">
				{ description }
			</div>
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
	);
}

export default HeroText;