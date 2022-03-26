import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="keywords" content={keywords} />
				<meta name="description" content={description} />
			</Head>

			<Header />
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: 'Events needing a DJ',
	description: 'Get access to DJs and the hottest parties around',
	keywords: 'music, games, laughter',
};
