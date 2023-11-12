import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'

import App from "./App";

describe("the app doesnt crash", () => {
  it("works", async () => {
    // const user = userEvent.setup()
    render(<App />);

    expect(screen.getAllByRole("h1")).toBeTruthy();
  });
});

// COMPLETE EXERCISE HERE


describe ("player names can be input", () =>{
  test('name input works', async () =>{
    const user = userEvent.setup()

    const player1 = "andrew"
    const player2 = "brad"


    const playerXInput = screen.getByLabelText('Enter X Player Name')
    const playerOInput = screen.getByLabelText('Enter O Player Name')
    const nameSaveBtn = screen.getByRole('button', {name: "Save Player Names"})

    const turnDisplay = screen.getByText(/s turn/i)

    expect(playerXInput).toHaveTextContent("")
    expect(playerOInput).toHaveTextContent("")
  
    user.click(playerXInput)
    expect(playerXInput).toHaveFocus()
    
    user.type(playerXInput, player1)
    expect(playerXInput).toHaveTextContent(player1)

    user.click(playerOInput)
    expect(playerOInput).toHaveFocus()

    user.type(playerOInput, player2)
    expect(playerOInput).toHaveTextContent(player2)

    expect(turnDisplay).toHaveTextContent(`X's turn (${player1})`)
  })
})

describe('game play works correctly', () =>{
  const user = userEvent.setup() 
  const gameBoard = screen.getByTestId('board')
  const boardSquares = within(gameBoard).getAllByRole('button')

  const turnDisplay = screen.getByText(/s turn/i)
  const resetBtn = screen.getByRole('button', {name:/reset/i})

  test('player switches back and forth appropriately', async () => {
    expect(turnDisplay.textContent).toContain("X's Turn")

    user.click(boardSquares[0])
    
    expect(boardSquares[0].textContent).toContain(/x/i)
    expect (turnDisplay.textContent).toContain("O's Turn")
    
    user.click(boardSquares[1])
    expect(boardSquares[1].textContent).toContain(/o/i)
    expect (turnDisplay.textContent).toContain("X's Turn")
    
    user.click(boardSquares[3])
    user.click(boardSquares[4])
    user.click(boardSquares[6])

    const winAlert = await screen.findByRole('heading', {name: /wins!/i})
    expect(winAlert).toBeInTheDocument()
    expect(winAlert.textContent).toContain('X wins!')

    user.click(resetBtn)

    expect(boardSquares[1].textContent).toBeFalsy()

  })
})