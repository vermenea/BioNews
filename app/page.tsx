import Image from 'next/image';
import styles from './page.module.css';
import logo from '@/public/bio-icon.png';


export default function Home() {
	return (
		<main className={styles.main}>
			<header className={styles.header}>
				<Image src={logo} alt='A blue DNA helix logo' height={50} />
				<h1>BioNews</h1>
			</header>

		</main>
	);
}
