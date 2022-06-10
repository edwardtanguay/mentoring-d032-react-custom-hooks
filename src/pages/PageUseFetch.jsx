import { useFetch } from '../hooks/useFetch';

const nounsUrl = 'https://edwardtanguay.netlify.app/share/germanNouns.json';
const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';

export const PageUseFetch = () => {
	const [nouns] = useFetch(nounsUrl);

	return (
		<div className="page_fetch">
			<h2>useFetch</h2>
			<p>There are {nouns.length} nouns: {nouns.map(m => m.article + ' ' + m.singular).join(', ')}</p>
		</div>
	)
}