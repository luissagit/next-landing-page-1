import Header from './header';

function Layout({ children }) {
	return(
		<div id="app" className="font-body bg-bg">
			<header>
				<Header />
			</header>
			<main className="py-4">
				{ children }
			</main>
			<footer>
				
			</footer>
		</div>
	);
}

export default Layout;