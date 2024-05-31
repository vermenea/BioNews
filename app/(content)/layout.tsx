import type { Metadata } from 'next';
import '../globals.css';
import Layout from '@/components/layout/layout';
import MainHeader from '@/components/main-header';

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
					<MainHeader/>
				{children}
				</Layout>
			</body>
		</html>
	);
}
