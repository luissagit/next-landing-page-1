import HeroImage from './heroImage';
import HeroText from './heroText';

function Hero({ hero }) {
	const { image } = hero;

	return(
		<div className="mt-4">
			<HeroImage image={image} />
			<HeroText detail={hero} />
		</div>
	);
}

export default Hero;