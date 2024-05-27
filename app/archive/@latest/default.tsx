import NewsList from '@/components/news-list';
import { getLatestNews } from '@/lib/news-util';

export default function LatestPage() {
	const latestNews = getLatestNews();
	return (
		<>
			<h2>Latest page</h2>
			<NewsList news={latestNews} />
		</>
	);
}
