import Header from './header';
import Footer from './footer';

function Layout({ children }) {
	return(
		<div id="app" className="font-body bg-bg">
			<header>
				<Header />
			</header>
			<main className="pt-4">
				{ children }
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default Layout;