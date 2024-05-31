import type { Metadata } from 'next';
import '../globals.css';
import Footer from '@/components/layout/Footer/Footer';
import Layout from '@/components/layout/layout';

export const metadata: Metadata = {
	title: 'BioNews',
	description: 'Enhance your knowledge by visiting our BioNews website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<Layout>
				{children}
				</Layout>
			
				
			</body>
		</html>
	);
}
