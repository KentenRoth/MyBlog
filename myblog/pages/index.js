import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Kenten Roth</title>
				<meta name="description" content="My personal blog" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<main></main>
		</div>
	);
}
