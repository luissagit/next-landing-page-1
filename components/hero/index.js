import HeroImage from './heroImage';
import HeroText from './heroText';

function Hero({ hero }) {
	const { image } = hero;

	return(
		<div className="mt-4 md:grid grid-cols-2 gap-8 max-w-4xl mx-auto">
			<HeroImage image={image} />
			<HeroText detail={hero} />
		</div>
	);
}

export default Hero;