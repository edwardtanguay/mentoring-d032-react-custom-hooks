import { useFetch } from '../hooks/useFetch';

const nounsUrl = 'https://edwardtanguay.netlify.app/share/germanNouns.json';
const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

export const PageUseFetch = () => {
	const [nouns, nounsAreLoading] = useFetch(nounsUrl);
	const [techBooks, techBooksAreLoading] = useFetch(techBooksUrl);

	return (
		<div className="page_fetch">
			<h2>useFetch</h2>
			{nounsAreLoading ? (
				<p>Nouns are loading...</p>
			) : (
				<p>
					There are {nouns.length} nouns:{' '}
					{nouns.map((m) => m.article + ' ' + m.singular).join(', ')}
				</p>
			)}
			{techBooksAreLoading ? (
				<p>Tech books are loading...</p>
			) : (
				<p>
					There are {techBooks.length} tech books:{' '}
					{techBooks.map((m) => m.title).join(', ')}
				</p>
			)}
		</div>
	);
};
