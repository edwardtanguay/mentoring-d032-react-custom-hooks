import { useState } from 'react';

export const PageUseToggle = () => {
	const [userIsOnline, setUserIsOnline] = useState(false);
	
	const toggleUserIsOnline = () => {
		const _userIsOnline = userIsOnline ? false : true;
		setUserIsOnline(_userIsOnline);
	}

	return (
		<div className="page_useToggle">
			<h2>useToggle</h2>
			<div className="buttonArea">
				{userIsOnline ? (
					<p>User is online.</p>
				) : (
						<p>USER IS OFFLINE</p>
				)}
				<button onClick={toggleUserIsOnline}>Toggle User Status</button>
		</div>
		</div>
	)
}