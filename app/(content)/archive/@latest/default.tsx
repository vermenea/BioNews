import { getLatestNews } from '@/backend/news-util';
import NewsList from '@/components/news-list';


export default async function LatestPage() {
	const latestNews = await getLatestNews();
	return (
		<>
			<h2>Latest page</h2>
			<NewsList news={latestNews} />
		</>
	);
}
