const PokerGame = (player1, player2) => {
	const [currentPlayer, setCurrentPlayer] = useState(player1);

	const nextPlayer = () => {
		setCurrentPlayer((currentPlayer) =>
			currentPlayer === player1 ? player2 : player1
		);
	};

	// let isMyTurn = currentPlayer === player1;
	return (
		<div>
			<div>
				<h2>Scoreboard</h2>
				<div>
					<p>Player 1 Score: {player1.score}</p>
					<p>Player 2 Score: {player2.score}</p>
				</div>
			</div>
			<div>
				<h2>Turn List</h2>
				<p>Current Turn: {currentPlayer}</p>
				<button onClick={nextPlayer}>Next Turn</button>
			</div>
			<div>
				<h2>Player Information</h2>
				<div>
					<p>Player 1: {player1.name}</p>
					<p>Player 2: {player2.name}</p>
				</div>
			</div>
			<PlayArea>
				{/* more imaginary complex game logic here to actually play the game */}
			</PlayArea>
			<div className="poker-hand">
				<h2>Current layer's Hand</h2>
				<div className="card-container">
					{currentPlayer.cards.map((card, index) => (
						<div className="card" key={index}>
							{card}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

