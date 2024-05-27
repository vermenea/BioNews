import NewsList from '@/components/news-list';
import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
	getNewsForYearAndMonth,
} from '@/lib/news-util';

import Link from 'next/link';

export default function FilteredNews({ params }: any) {
	const filterDate = params.filter;
	let links = getAvailableNewsYears();
	const selectedYear = filterDate?.[0];
	const selectedMonth = filterDate?.[1];

	let news;

	if (selectedYear && !selectedMonth) {
		news = getNewsForYear(selectedYear);
		links = getAvailableNewsMonths(selectedYear);
	}

	if (selectedYear && selectedMonth) {
		news = getNewsForYearAndMonth(selectedYear, selectedMonth);
		links = [];
	}

	let newsContent = <p>No news found for selected period</p>;

	if (news && news.length > 0) {
		newsContent = <NewsList news={news} />;
	}

	return (
		<>
			<header id='archive-header'>
				<nav>
					<ul>
						{links.map((link) => {
							const href = selectedYear
								? `/archive/${selectedYear}/${link}`
								: `/archive/${link}`;

							return (
								<li key={link}>
									<Link href={href}>{link}</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
			{newsContent}
		</>
	);
}
