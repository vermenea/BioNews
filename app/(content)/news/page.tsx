import NewsList from '@/components/news-list';

export default async function NewsPage() {
	const response = await fetch('http://localhost:8080/news');

	if (!response.ok) {
		throw new Error('Failed to fetch the news');
	}

	const news = await response.json();
	return (
		<>
			<h1 className='news-header'>Top Science News</h1>
			<NewsList news={news} />
		</>
	);
}
