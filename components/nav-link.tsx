'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkProps {
    href: string,
    children: React.ReactNode,
}
export default function NavLink({ href, children } : LinkProps) {
	const path = usePathname();
	return (
		<>
			<Link
				href={href}
				className={path.startsWith(href) ? 'active' : undefined}
			>
				{children}
			</Link>
		</>
	);
}
