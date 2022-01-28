import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import allData from '../data/data.json';

export default function CrewPage() {
	const router = useRouter();
	const currentUrl = router.pathname.substring(1);

	// nav state
	const [curr, setCurr] = React.useState(0);

	// data state
	const data = React.useMemo(() => {
		return allData[currentUrl][curr];
	}, [curr, currentUrl]);

	return (
		<main className='crew-page'>
			<h1>
				<span>02</span> Meet your crew
			</h1>

			<div>
				<div>
					<Image
						src={data?.images.webp}
						alt={data?.name}
						layout='fill'
						className='object-contain'
						priority
					/>
				</div>

				<div>
					<nav>
						<ul>
							{[...Array(allData[currentUrl]?.length).keys()].map(i => (
								<li key={i} className={curr === i ? 'bg-white' : 'bg-white bg-opacity-[14%]'}>
									<button onClick={() => setCurr(i)}></button>
								</li>
							))}
						</ul>
					</nav>

					<div>
						<div>
							<span>{data?.role}</span>
							<h2>{data?.name}</h2>
						</div>
						<p>{data?.bio}</p>
					</div>
				</div>
			</div>
		</main>
	);
}
