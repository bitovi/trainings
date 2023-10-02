import { render } from "@testing-library/react";
import { Scoreboard, HandCards, RockPaperScissors } from 'rock-paper-scissors'
// 1. Write 1 tests for each of the functions imported above

const playerJane = {name: "Jane", score: 1, cards: ["rock", "rock", "paper"]}
const playerJeff = {name: "Jeff", score: 0, cards: ["scissors", "paper", "scissors"]}

describe("Scoreboard", () => {
  it("will display inputed scores", () => {

   render(<Scoreboard player1={playerJane} player2={playerJeff} />)

   const player1Score = screen.getByText(/Player 1 Score/)
   const player2Score = screen.getByText(/Player 2 Score/)

   expect(player1Score.score).toContain(playerJane.score)
   expect(player2Score.score).toContain(playerJeff.score)
  }) 
})

describe("HandCards", () => {
  it("will display correct player cards", () => {
    
    render(<HandCards cards={playerJane.cards} />)

    const janeCards = screen.getAllByClassName("cards")

    expect(janeCards.length).toBe(3)
    expect(janeCards[0]).toBe("rock")
    expect(janeCards[1]).toBe("rock")
    expect(janeCards[2]).toBe("paper")

  })
})

describe("RockPaperScissors", () => {
  it("will render StartGame form when initialized", () => {
    render(<RockPaperScissors />)
    
    const button = screen.getByText(/Start Game/)
    expect(button).toBeInTheDocument()
  })
  
  it("can submit player names", () => {
    render(<RockPaperScissors />)
    const user = userEvent.setup()
    
    const player1Input = screen.getByText(/Player1/)
    const player2Input = screen.getByText(/Player2/)
    const submitButton = screen.getByText(/Start Game/)


    user.type(player1Input, player1.name)
    user.type(player2Input, player2.name)
    user.click(submitButton)

    expect(screen.getByText(/Player's Hand/)).toBeInTheDocument()
  })
})