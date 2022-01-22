import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import allData from '../data/data.json';
const navList = ['Moon', 'Mars', 'Europa', 'Titan'];

export default function DestinationPage() {
	const router = useRouter();
	const currentUrl = router.pathname === '/' ? 'home' : router.pathname.substring(1);

	// nav state
	const [curr, setCurr] = React.useState('Moon');

	// data state
	const data = React.useMemo(() => {
		return allData[currentUrl].find(({ name }) => name === curr);
	}, [curr, currentUrl]);

	return (
		<main className='destination-page'>
			<h1 className='font-barlow-condensed text-center uppercase tracking-[2.7px] mb-10'>
				<span className='font-bold mix-blend-soft-light'>01</span> Pick your destination
			</h1>

			<div className='mx-auto mb-7 relative w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]'>
				<Image src={data?.images.webp} alt={data?.name} layout='fill' />
			</div>

			<nav className='w-full font-barlow-condensed mb-14'>
				<ul className='flex justify-center items-center space-x-8'>
					{navList.map(item => (
						<li
							key={item}
							className={
								curr === item
									? "relative pb-3 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[3px] before:bg-white"
									: 'pb-3'
							}>
							<button className='uppercase text-sm tracking-[2.36px]' onClick={() => setCurr(item)}>
								{item}
							</button>
						</li>
					))}
				</ul>
			</nav>

			<div className='pb-9 w-11/12 mx-auto mb-9 border-b border-b-gray text-center'>
				<h2 className='uppercase font-bellefair text-6xl mb-4'>{data?.name}</h2>

				<p className='font-barlow leading-6 text-sm text-light-gray'>{data?.description}</p>
			</div>

			{[
				{ text: 'Avg. distance', distance: data?.distance },
				{ text: 'Est. travel time', distance: data?.travel },
			].map(({ text, distance }, index) => (
				<div key={index} className='text-center uppercase mb-10'>
					<span className='block mb-3 text-xs text-light-gray font-barlow-condensed tracking-[2.36px]'>
						{text}
					</span>
					<h3 className='font-bellefair text-3xl'>{distance}</h3>
				</div>
			))}
		</main>
	);
}
