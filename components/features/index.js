import { useState } from 'react';
import Feature from './feature';

function Features() {
	const [features, setFeatures] = useState([
		{ name: 'strategy', description: `we'll work with you to develop the right strategy` },
		{ name: 'automation', description: 'work synchronization and automated services'},
		{ name: 'deployment', description: 'dedicated servers to deploy and test applications'},
		{ name: 'education', description: 'stay informed on all our tools and technologies'}
	]);

	return(
		<div className="mt-4 grid gap-4">
			{
				features.map((feature, index) => {
					return <Feature feature={feature} key={index}/>
				})
			}
		</div>
	);
}

export default Features;