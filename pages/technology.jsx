import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import allData from '../data/data.json';

export default function TechnologyPage() {
	const router = useRouter();
	const currentUrl = router.pathname.substring(1);

	// nav state
	const [curr, setCurr] = React.useState(0);

	// data state
	const data = React.useMemo(() => {
		return allData[currentUrl][curr];
	}, [curr, currentUrl]);

	return (
		<main className='technology-page'>
			<h1>
				<span>03</span> Space launch 101
			</h1>

			<div>
				<div>
					<Image src={data?.images.landscape} alt={data?.name} layout='fill' priority />
				</div>

				<div>
					<Image src={data?.images.portrait} alt={data?.name} layout='fill' priority />
				</div>

				<div>
					<nav>
						<ul>
							{[...Array(allData[currentUrl]?.length).keys()].map(i => (
								<li key={i} className={curr === i ? 'current' : ''}>
									<button onClick={() => setCurr(i)}>{i + 1}</button>
								</li>
							))}
						</ul>
					</nav>

					<div>
						<div>
							<span>The terminology...</span>
							<h2>{data?.name}</h2>
						</div>

						<p>{data?.description}</p>
					</div>
				</div>
			</div>
		</main>
	);
}
