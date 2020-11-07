import { useState } from 'react';
import Product from './product';
import Slider from 'react-slick';
import { CustomLeftArrow, CustomRightArrow } from './customArrow';

function Pricing() {
	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		nextArrow: <CustomRightArrow />,
		prevArrow: <CustomLeftArrow />,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
		]
	};

	const [products, setProducts] = useState([
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
		},
		{
			name: 'growth',
			price: '499',
			description: 'the sensible option for growwing companies',
			customer: 244,
			features: [
				{ name: 'core business system', status: true },
				{ name: 'team management', status: true },
				{ name: 'dual infrastructure', status: true },
				{ name: 'core customized features', status: false },
			]
		},
		{
			name: 'corporate',
			price: '1299',
			description: 'everything a global company need',
			customer: 122,
			features: [
				{ name: 'core business system', status: true },
				{ name: 'team management', status: true },
				{ name: 'dual infrastructure', status: true },
				{ name: 'core customized features', status: true },
			]
		}
	]);

	return(
		<div className="mt-4 text-primary-100 text-center bg-gray-200 p-4">
			<div className="max-w-4xl mx-auto">
				<h2 className="font-bold text-4xl first">
					pricing
				</h2>
				<p className="font-light first">
					offer multiple packages or monthly subscriptions? Why not showcase your featured price plans here, bold and beautifully.
				</p>
				<div className="mt-2 py-2 px-4">
					<Slider {...settings}>
						{
							products.map((product, index) => {
								return(
									<div key={index}>
										<Product product={product} />
									</div>
								)
							})
						}
					</Slider>
				</div>
			</div>
		</div>
	);
}

export default Pricing;