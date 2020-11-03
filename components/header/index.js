import { useState } from 'react';
import Logo from './logo';
import MenuButton from './menuButton';
import Navbar from './navbar';

function Header() {
	const [isOpened, setIsOpened] = useState(false);

	const handleToggleMenu = () => {
		setIsOpened(!isOpened);
	}

	return(
		<div>
			<div className="py-3 px-4 flex justify-between border-b-2 items-center relative">
				<Logo />
				<MenuButton handleToggleMenu={() => handleToggleMenu()} isOpened={isOpened} />
			</div>
			<Navbar isOpened={isOpened}/>
		</div>
	);
}

export default Header;