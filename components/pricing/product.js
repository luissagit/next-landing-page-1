function Product({ product }) {
	const { name, price, description, customer, features } = product;

	const setBg = (i) => {
		if(features[i].status) {
			return('mr-2 bg-secondary-100 rounded-full')
		} else {
			return('mr-2 bg-gray-300 rounded-full')
		}
	}


	return(
		<div className="rounded-2xl text-primary-100 bg-white p-4 mx-2 md:mx-4">
			<div className="text-4xl font-bold">
				${ price }
			</div>
			<h4 className="text-secondary-100 text-xl font-semibold first">
				{ name }
			</h4>
			<p className="text-primary-100 text-md font-light first">
				{ description }
			</p>
			<div className="grid place-content-center">
				<ul className="mt-2 mx-10 text-sm text-left">
					{
						features.map((feature, index) => {
							return(
								<li key={index} className="flex mt-2 items-center">
									<span className={setBg(index)}>
										<svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
									</span>
									<span className="first">
										{feature.name}
									</span>
								</li>
							)
						})
					}
				</ul>
			</div>
			<button className="btn-blue first mt-4 font-body transition-default">
				enquire
			</button>
		</div>
	);
}

export default Product;