import type { Metadata } from 'next';
import '../globals.css';

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
				{children}
			</body>
		</html>
	);
}
