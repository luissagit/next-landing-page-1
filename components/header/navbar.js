import { useState } from 'react';

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
		<div className={`top-0 right-0 mt-20 bg-white text-gray-700 py-4 pl-4 pr-12 origin-top ${style}`}>
			<ul>
				{
					menus.map((menu, index) =>{
						return <li className="text-sm font-light p-1 first" key={index}>{menu}</li>
					})
				}
			</ul>
		</div>
	);
}

export default Navbar;