import { getNewsItem } from '@/backend/news-util';
import Image from 'next/image';
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
				<Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={100} height={50}/>
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>{newsItem.url}</p>
		
		</article>
	);
}
