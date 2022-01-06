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

	React.useEffect(() => {
		setNav(false);
	}, [asPath]);

	return (
		<header className='w-full flex items-center justify-center p-4'>
			<div className='flex-grow'>
				<LogoSvg />
			</div>

			<nav
				className={
					navOpen
						? 'fixed top-0 right-0 bg-black bg-opacity-[40%] w-8/12 h-full p-7 transition-all duration-200 ease-linear'
						: 'fixed top-0 bg-black bg-opacity-[40%] w-8/12 h-full p-7 transition-all duration-200 ease-linear -right-full'
				}>
				<button title='close menu' className='mb-7 ml-auto block' onClick={() => setNav(false)}>
					<CloseSvg />
				</button>

				<ul>
					{navLinks.map(({ url, name }, idx) => (
						<li
							key={idx}
							className={
								asPath === url
									? `mb-7 text-white font-barlow-condensed tracking-widest uppercase relative w-full after:content-[''] after:absolute after:top-0 after:-right-7 after:w-1 after:h-full after:bg-white`
									: 'mb-7 text-white font-barlow-condensed tracking-widest uppercase relative w-full'
							}>
							<Link href={url}>
								<a>
									<span className='font-bold'>{name.split(' ')[0]}</span>{' '}
									<span>{name.split(' ')[1]}</span>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<button title='open menu' onClick={() => setNav(true)}>
				<HamburgerSvg />
			</button>
		</header>
	);
}
