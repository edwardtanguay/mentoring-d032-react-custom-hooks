import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			(async () => {
				setItems((await axios.get(url)).data);
			})();
		}, 3000);
	}, []);

	return [items, items.length === 0];
};
