import { useState } from 'react';
import Product from './product';

function Pricing() {
	const [products, setProductss] = useState([
		{
			name: 'basic',
			price: '199',
			description: 'starter plan with all the basics included',
			customer: 244,
			features: [
				{ name: 'core business system', status: true },
				{ name: 'team management', status: true },
				{ name: 'dual infrastructure', status: false },
				{ name: 'core customized features', status: false },
			]
		}
	]);

	return(
		<div className="mt-4 text-primary-100 text-center bg-gray-200 p-4">
			<h2 className="font-bold text-4xl first">
				pricing
			</h2>
			<p className="font-light first">
				offer multiple packages or monthly subscriptions? Why not showcase your featured price plans here, bold and beautifully.
			</p>
			<div className="mt-2 py-2 px-4">
				{
					products.map((product, index) => {
						return <Product product={product} key={index}/>
					})
				}
			</div>
		</div>
	);
}

export default Pricing;