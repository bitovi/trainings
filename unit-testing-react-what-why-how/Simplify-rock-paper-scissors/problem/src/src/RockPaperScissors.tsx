import { useState } from "react";

interface Player {
	name: string;
	score: number;
	cards: ("rock" | "paper" | "scissors")[];
}

const RockPaperScissors = () => {
	const generatePlayer = (name: string): Player => {
		return {
			name: name,
			score: 0,
			cards: ["rock", "paper", "scissors"],
		};
	};

	const [player1, setPlayer1] = useState<Player>();
	const [player2, setPlayer2] = useState<Player>();
	const [currentPlayer, setCurrentPlayer] = useState<Player>(player1);
	const [winner, setWinner] = useState<Player>();
	const [name1, setName1] = useState("");
	const [name2, setName2] = useState("");

	let onSubmit = () => {
		setPlayer1(generatePlayer(name1));
		setPlayer2(generatePlayer(name2));
	};

	return (
		<div>
			frient
			{player1 && player2 ? (
				<>
					<div>
						<h2>Scoreboard</h2>
						<div>
							<p>Player 1 Score: {player1.score}</p>
							<p>Player 2 Score: {player2.score}</p>
						</div>
					</div>
					<div>
						<h2>Player Information</h2>
						<div>
							<p>Player 1: {player1.name}</p>
							<p>Player 2: {player2.name}</p>
						</div>
					</div>
					{/* imaginary complex game logic component here uses setCurrentPlayer */}
					<div className="poker-hand">
						<h2>Player's Hand</h2>
						<div className="card-container">
							{currentPlayer.cards.map((card, index) => (
								<div className="card" key={index}>
									{card}
								</div>
							))}
						</div>
					</div>
				</>
			) : (
				<div>
					hello
					<form onSubmit={onSubmit}>
						<label htmlFor="name1">Player 1</label>
						<input
							type="text"
							name="name1"
							id="name1"
							value={name1}
							onChange={(event) => setName1(event.target.value)}
						/>
						<label htmlFor="name2">Player 2</label>
						<input
							type="text"
							name="name2"
							id="name2"
							value={name2}
							onChange={(event) => setName2(event.target.value)}
						/>
						<button type="submit">Start Game</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default RockPaperScissors;
