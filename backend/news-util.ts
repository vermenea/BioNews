import sql from 'better-sqlite3';

const db = sql('data.db');

interface NewsItem {
	image: string;
	id: number;
	title: string;
	content: string;
	date: string;
	slug: string;
	url: string;
}

export async function getAllNews(): Promise<NewsItem[]> {
	const news = db.prepare('SELECT * FROM news').all() as NewsItem[];
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return news;
}

export async function getNewsItem(slug: string): Promise<NewsItem | undefined> {
	const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug) as
		| NewsItem
		| undefined;
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return newsItem;
}

export async function getLatestNews(): Promise<NewsItem[]> {
	const latestNews = db
		.prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
		.all() as NewsItem[];
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return latestNews;
}

export async function getAvailableNewsYears(): Promise<string[]> {
	const years = db
		.prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
		.all() as { year: string }[];
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return years.map((year) => year.year);
}

export function getAvailableNewsMonths(year: string): string[] {
	const months = db
		.prepare(
			"SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
		)
		.all(year) as { month: string }[];
	return months.map((month) => month.month);
}

export async function getNewsForYear(year: string): Promise<NewsItem[]> {
	const news = db
		.prepare(
			"SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
		)
		.all(year) as NewsItem[];
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return news;
}

export async function getNewsForYearAndMonth(
	year: string,
	month: string
): Promise<NewsItem[]> {
	const news = db
		.prepare(
			"SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
		)
		.all(year, month) as NewsItem[];
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return news;
}
