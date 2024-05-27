import { NEWS } from "@/news";

export function getAllNews() {
	return NEWS;
  }
  
  export function getLatestNews() {
	return NEWS.slice(0, 3);
  }
  
  export function getAvailableNewsYears() {
	return NEWS.reduce((years: number[], news: { date: string | number | Date; }) => {
	  const year = new Date(news.date).getFullYear();
	  if (!years.includes(year)) {
		years.push(year);
	  }
	  return years;
	}, []).sort((a: number, b: number) => b - a);
  }
  
  export function getAvailableNewsMonths(year: string | number) {
	return NEWS.reduce((months: number[], news: { date: string | number | Date; }) => {
	  const newsYear = new Date(news.date).getFullYear();
	  if (newsYear === +year) {
		const month = new Date(news.date).getMonth();
		if (!months.includes(month)) {
		  months.push(month + 1);
		}
	  }
	  return months;
	}, []).sort((a: number, b: number) => b - a);
  }
  
  export function getNewsForYear(year: string | number) {
	return NEWS.filter(
	  (news: { date: string | number | Date; }) => new Date(news.date).getFullYear() === +year
	);
  }
  
  export function getNewsForYearAndMonth(year: string | number, month: string | number) {
	return NEWS.filter((news: { date: string | number | Date; }) => {
	  const newsYear = new Date(news.date).getFullYear();
	  const newsMonth = new Date(news.date).getMonth() + 1;
	  return newsYear === +year && newsMonth === +month;
	});
  }