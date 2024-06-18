import { getNewsItem } from '@/backend/news-util';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function NewsDetailPage({ params }: any) {
	const newsSlug = params.slug;
	const newsItem = await getNewsItem(newsSlug);

	if (!newsItem) {
		notFound();
	}

	return (
		<article className='news-article'>
			<header>
				<img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>{newsItem.content}</p>
			<div className='container'>
			<Link href={newsItem.url} className='article-link'>Read more</Link>
			</div>
			
		
		</article>
	);
}
