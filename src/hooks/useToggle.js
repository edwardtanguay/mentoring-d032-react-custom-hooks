import { useState } from 'react';

export const useToggle = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const toggleValue = () => {
		const _value = value ? false : true;
		setValue(_value);
	};

	return [value, toggleValue];
};
