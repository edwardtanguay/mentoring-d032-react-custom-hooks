export const PageUseToggle = () => {
	
	const userIsOnline = false;

	return (
		<div className="page_useToggle">
			<h2>useToggle</h2>
			<div className="buttonArea">
				{userIsOnline ? (
					<p>User is online.</p>
				) : (
						<p>USER IS OFFLINE</p>
				)}
				<button>Toggle User Status</button>
		</div>
		</div>
	)
}