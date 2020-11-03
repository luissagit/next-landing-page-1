function HeroImage({ image }) {
	return(
		<div>
			<img src={`/images/${image}`} alt="web development" />
		</div>
	);
}

export default HeroImage;