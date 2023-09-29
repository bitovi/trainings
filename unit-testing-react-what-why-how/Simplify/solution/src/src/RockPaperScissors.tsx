// TODO: Complicate me
import { useState } from "react";

interface Player {
	name: string;
	score: number;
	cards: ("rock" | "paper" | "scissors")[];
}

const generatePlayer = (name: string): Player => {
	return {
		name: name,
		score: 0,
		cards: ["rock", "paper", "scissors"],
	};
};

const StartGame = ({
	onStart,
}: {
	onStart: (player1: Player, player2: Player) => void;
}) => {
	const [name1, setName1] = useState("");
	const [name2, setName2] = useState("");

	let onSubmit = () => {
		let player1 = generatePlayer(name1);
		let player2 = generatePlayer(name2);
		onStart(player1, player2);
	};

	return (
		<div>
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
	);
};

export const Scoreboard = ({
	player1,
	player2,
}: {
	player1: Player;
	player2: Player;
}): JSX.Element => {
	return (
		<div>
			<h2>Scoreboard</h2>
			<div>
				<p>Player 1 Score: {player1.score}</p>
				<p>Player 2 Score: {player2.score}</p>
			</div>
		</div>
	);
};

const PlayerInfo = ({
	player1,
	player2,
}: {
	player1: Player;
	player2: Player;
}) => {
	return (
		<div>
			<h2>Player Information</h2>
			<div>
				<p>Player 1: {player1.name}</p>
				<p>Player 2: {player2.name}</p>
			</div>
		</div>
	);
};

const HandCards = ({ cards }: { cards: Player["cards"] }) => {
	return (
		<div className="poker-hand">
			<h2>Player's Hand</h2>
			<div className="card-container">
				{cards.map((card, index) => (
					<div className="card" key={index}>
						{card}
					</div>
				))}
			</div>
		</div>
	);
};

export const Game = ({
	player1,
	player2,
}: {
	player1: Player;
	player2: Player;
}): JSX.Element => {
	const [currentPlayer, setCurrentPlayer] = useState<Player>(player1);
	const [winner, setWinner] = useState<Player>();

	return (
		<>
			<Scoreboard player1={player1} player2={player2} />
			<PlayerInfo player1={player1} player2={player2} />
			{/* imaginary complex game logic component here uses setCurrentPlayer */}
			<HandCards cards={currentPlayer.cards} />
		</>
	);
};

const RockPaperScissors = () => {
	const [player1, setPlayer1] = useState<Player>();
	const [player2, setPlayer2] = useState<Player>();

	return (
		<div>
			{player1 && player2 ? (
				<Game player1={player1} player2={player2} />
			) : (
				<StartGame
					onStart={(player1, player2) => {
						setPlayer1(player1);
						setPlayer2(player2);
					}}
				/>
			)}
		</div>
	);
};

export default RockPaperScissors