import NewsList from '@/components/news-list';
import { NEWS } from '@/news';

export default function NewsPage() {
	return (
		<>
			<h1>News Page</h1>
			<NewsList news={NEWS}/>
		</>
	);
}
