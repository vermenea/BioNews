export default function ArchiveLayout({ archive, latest }: any) {
	return (
		<div>
			<h1>News Archive</h1>
			<section id='archive-filter'>{archive}</section>
			<section id='archiver-latest'>{latest}</section>
		</div>
	);
}
