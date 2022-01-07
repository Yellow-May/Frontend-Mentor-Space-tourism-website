import React from 'react';
import Head from 'next/head';

import MainLayout from '../components/layout/main';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<title>Frontend Mentor | Space tourism website</title>
			</Head>

			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</React.Fragment>
	);
}

export default MyApp;
