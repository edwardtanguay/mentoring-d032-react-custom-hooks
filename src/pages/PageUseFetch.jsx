import { useState, useEffect } from 'react';
import axios from 'axios';

const nounsUrl = 'https://edwardtanguay.netlify.app/share/germanNouns.json';

export const PageUseFetch = () => {
	const [nouns, setNouns] = useState([]);
	
	useEffect(() => {
		(async () => {
			setNouns((await axios.get(nounsUrl)).data);
		})();
	}, []);

	return (
		<div className="page_fetch">
			<h2>useFetch</h2>
			<p>There are {nouns.length} nouns: {nouns.map(m => m.article + ' ' + m.singular).join(', ')}</p>
		</div>
	)
}