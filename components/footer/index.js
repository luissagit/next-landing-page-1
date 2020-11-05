import SiteInfo from './siteInfo';
import About from './about';
import Contact from './contact';
import Socials from './socials';

function Footer() {
	return(
		<div className="bg-primary-100">
			<div className="p-4 md:grid grid-cols-4 gap-4">
				<SiteInfo />
				<About />
				<Contact />
				<Socials />
			</div>
		</div>
	);
}

export default Footer;