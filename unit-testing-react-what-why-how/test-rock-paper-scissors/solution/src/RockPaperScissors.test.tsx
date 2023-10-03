import {
	Scoreboard,
	HandCards,
	RockPaperScissors,
	Player,
} from "./RockPaperScissors";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const playerJane: Player = {
	name: "Jane",
	score: 11,
	cards: ["rock", "rock", "paper"],
};
const playerJeff: Player = {
	name: "Jeff",
	score: 22,
	cards: ["scissors", "paper", "scissors"],
};

describe("Scoreboard", () => {
	it("will display score as given", () => {
		render(<Scoreboard player1={playerJane} player2={playerJeff} />);

		const p1 = screen.getByText(/player 1 score/i);
		const p2 = screen.getByText(/player 2 score/i);

		expect(p1.textContent).toContain(`Player 1 Score: ${playerJane.score}`);
		expect(p2.textContent).toContain(playerJeff.score);
	});
});

describe("HandCards", () => {
	it("will display correct player card", () => {
		render(<HandCards cards={playerJane.cards} />);

		const janeCards = screen.getAllByTestId("card");

		expect(janeCards.length).toBe(3);
		expect(janeCards[0].textContent).toBe("rock");
		expect(janeCards[1].textContent).toBe("rock");
		expect(janeCards[2].textContent).toBe("paper");
	});
});

describe("RockPaperScissors", () => {
	it("will render StartGame form when initialized", () => {
		render(<RockPaperScissors />);

		const button = screen.getByText(/Start Game/i);
		expect(button).toBeInTheDocument();
	});

	it("can submit player names", async () => {
		render(<RockPaperScissors />);

		const player1Input = screen.getByText(/Player 1/i);
		const player2Input = screen.getByText(/Player 2/i);
		const submitButton = screen.getByText(/Start Game/i);

		userEvent.type(player1Input, playerJane.name);
		userEvent.type(player2Input, playerJeff.name);
		fireEvent.click(submitButton);

		expect(await screen.findByText(/Player's Hand/i)).toBeInTheDocument();
	});
});
