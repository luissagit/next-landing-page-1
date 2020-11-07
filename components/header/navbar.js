import { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ isOpened }) => {
	const [menus, setMenus] = useState([
		'home',
		'services',
		'pricing',
		'clients',
		'news',
		'contact',
	]);

	const style = isOpened ? ('absolute animate-fadeIn') : ('hidden');

	return(
		<div className={`top-0 right-0 mt-16 bg-white text-gray-700 py-4 pl-4 pr-12 origin-top md:block md:p-2 md:mt-0 ${style}`}>
			<ul className="md:flex justify-between">
				{
					menus.map((menu, index) =>{
						return(
							<li className="text-sm font-light" key={index}>
								<Link href="/">
									<a className="p-1 first md:px-3 border-b-2 border-bg hover:border-primary-100 transition-default">{menu}</a>
								</Link>
							</li>
						)
					})
				}
			</ul>
		</div>
	);
}

export default Navbar;