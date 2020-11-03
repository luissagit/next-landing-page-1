import { useState } from 'react';
import Layout from '../components/layout';
import Head from 'next/head'
import Hero from '../components/hero';
import Features from '../components/features';

function Home() {
	const [forHero, setForHero] = useState({
		first: {
			image: 'web-development.svg',
			title: 'beautifully, simple, code.',
			subtitle: 'multipurpose Landing Template',
			description: 'codelander is beutifully, simple, clean, and lightweight landing page template for all types of businesses, with bold and bright colours.',
			buttons: [
				{ name: 'learn more', style: 'btn-pink mt-4 font-round' },
			],
		},
		second: {
			image: 'conversation.svg',
			title: 'solving problem',
			subtitle: 'our services',
			description: 'this is a great section to introduce your company and showcase your featured services',
			buttons: [
				{ name: 'website design', style: 'btn-blue mt-4 font-round w-full font-semibold text-left' },
				{ name: 'application development', style: 'btn-blue mt-2 font-round w-full font-semibold text-left' },
			],
		},
		third: {
			image: 'team-presentation.svg',
			title: 'sales growth',
			subtitle: 'our services',
			description: 'you can talk about your secondary services here, or maybe promote your excellent customer service approach. Always grab your website visitors attention',
			buttons: [
				{ name: 'view pricing', style: 'btn-pink mt-4 font-round font-semibold text-left' },
			],
		},
	});

	return(
		<Layout>
			<Head>
				<title>code.</title>
			</Head>
			<div>
				<Hero hero={forHero.first} />
				<Features />
				<Hero hero={forHero.second} />
				<Hero hero={forHero.third} />
			</div>
		</Layout>
	);
}

export default Home;
