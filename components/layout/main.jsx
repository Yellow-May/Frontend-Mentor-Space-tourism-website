import React from 'react';
import MainHeader from './main-header';

export default function MainLayout({ children }) {
	return (
		<React.Fragment>
			<MainHeader />

			{children}

			<footer></footer>
		</React.Fragment>
	);
}
