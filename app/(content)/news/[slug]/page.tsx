import { NEWS } from '@/news';
import { notFound } from 'next/navigation';

export default function NewsDetailPage({ params }: any) {
	const newsSlug = params.slug;
	const newsItem = NEWS.find((newsItem) => newsItem.slug === newsSlug);

	if (!newsItem) {
		notFound();
	}

	return (
		<article className='news-article'>
			<header>
				<img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>{newsItem.content}</p>
		</article>
	);
}
