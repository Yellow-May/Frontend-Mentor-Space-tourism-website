import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import LogoSvg from '../svg/logo';
import HamburgerSvg from '../svg/hamburger';
import CloseSvg from '../svg/close';

const navLinks = [
	{ url: '/', name: '00 Home' },
	{ url: '/destination', name: '01 Destination' },
	{ url: '/crew', name: '02 Crew' },
	{ url: '/technology', name: '03 Technology' },
];

export default function MainHeader() {
	const { asPath } = useRouter();
	const [navOpen, setNav] = React.useState(false);

	// close nav in mobile when navigating to a different page
	React.useEffect(() => {
		setNav(false);
	}, [asPath]);

	return (
		<header>
			{/* logo area */}
			<LogoSvg />

			{/* nav area; if nav is open for mobile, render .open class styles */}
			<nav className={navOpen ? 'open' : ''}>
				{/* close nav button in mobile */}
				<button title='close menu' onClick={() => setNav(false)}>
					<CloseSvg />
				</button>

				{/* nav links; map navLinks array above */}
				<ul>
					{navLinks.map(({ url, name }, idx) => (
						// if current page is same as the url, render .current class styles
						<li key={idx} className={asPath === url ? 'current' : ''}>
							<Link href={url}>
								<a>
									{/* split name property to seperate numbering and actual name, for styling of the numbering */}
									<span>{name.split(' ')[0]}</span> <span>{name.split(' ')[1]}</span>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			{/* open nav button in mobile */}
			<button title='open menu' onClick={() => setNav(true)}>
				<HamburgerSvg />
			</button>
		</header>
	);
}
