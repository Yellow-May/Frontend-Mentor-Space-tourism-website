import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import allData from '../data/data.json';
const navList = ['Moon', 'Mars', 'Europa', 'Titan'];

export default function DestinationPage() {
	const router = useRouter();
	const currentUrl = router.pathname.substring(1);

	// nav state
	const [curr, setCurr] = React.useState('Moon');

	// data state
	const data = React.useMemo(() => {
		return allData[currentUrl].find(({ name }) => name === curr);
	}, [curr, currentUrl]);

	return (
		<main className='destination-page'>
			<h1>
				<span>01</span> Pick your destination
			</h1>

			<div>
				<div>
					<Image src={data?.images.webp} alt={data?.name} layout='fill' priority />
				</div>

				<div>
					<nav>
						<ul>
							{navList.map(item => (
								<li key={item} className={curr === item ? 'current' : ''}>
									<button onClick={() => setCurr(item)}>{item}</button>
								</li>
							))}
						</ul>
					</nav>

					<div>
						<h2>{data?.name}</h2>
						<p>{data?.description}</p>
					</div>

					<div>
						{[
							{ text: 'Avg. distance', distance: data?.distance },
							{ text: 'Est. travel time', distance: data?.travel },
						].map(({ text, distance }, index) => (
							<div key={index}>
								<span>{text}</span>
								<h3>{distance}</h3>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
