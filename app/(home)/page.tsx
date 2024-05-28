import Image from 'next/image';
import styles from '../page.module.css';
import logo from '@/public/bio-icon.png';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={styles.main}>
			<header className={styles.header}>
				<div className={styles.heading}>
					<Image src={logo} alt='A blue DNA helix logo' height={50} />
					<h1>BioNews</h1>
				</div>

				<p>
					Your source for the <strong className={styles.strong}>TOP</strong>{' '}
					bio-medical science news
				</p>
			</header>
			<Link href="/news">Explore</Link>
		</main>
	);
}
