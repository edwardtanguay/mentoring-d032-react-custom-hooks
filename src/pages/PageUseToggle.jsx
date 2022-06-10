import { useToggle } from '../hooks/useToggle';

export const PageUseToggle = () => {
	const [userIsOnline, toggleUserIsOnline] = useToggle(false);	

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