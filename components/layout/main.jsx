import { useRouter } from 'next/router';
import MainHeader from './main-header';

export default function MainLayout({ children }) {
	const router = useRouter();
	const pathClass = router.pathname === '/' ? 'home' : router.pathname.substring(1);

	return (
		<div className={pathClass}>
			<MainHeader />
			{children}
			<footer></footer>
		</div>
	);
}
