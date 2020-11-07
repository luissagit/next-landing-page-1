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
		<div className="py-3 px-4 border-b-2">
			<div className="max-w-4xl mx-auto relative">
				<div className="flex justify-between items-center">
					<Logo />
					<MenuButton handleToggleMenu={() => handleToggleMenu()} isOpened={isOpened} />
					<Navbar isOpened={isOpened}/>
				</div>
			</div>
		</div>
	);
}

export default Header;