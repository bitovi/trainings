import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'

import App from "./App";

describe("the app doesn't crash", () => {
  it("works", async () => {
    // const user = userEvent.setup()
    render(<App />);

    expect(screen.findAllByRole("heading")).toBeTruthy();
  });
});

// COMPLETE EXERCISE HERE


describe ("player names can be input", () =>{
  test('name input works', async () =>{
    const user = userEvent.setup()
    render(<App />);

    const player1 = "andrew"
    const player2 = "brad"


    const playerXInput = await screen.findByLabelText('X Player Name', {exact: false})
    const playerOInput = await screen.findByLabelText('Enter O Player Name')
    // const nameSaveBtn = screen.findByRole('button', {name: "Save Player Names"})

    const turnDisplay = await screen.findByText(/s turn/i)

    expect(playerXInput).toHaveValue("")
    expect(playerOInput).toHaveValue("")
  
    await user.click(playerXInput)
    expect(playerXInput).toHaveFocus()
    console.log(playerXInput)
    await user.type(playerXInput, player1)
    expect(playerXInput).toHaveValue(player1)

    await user.click(playerOInput)
    expect(playerOInput).toHaveFocus()

    await user.type(playerOInput, player2)
    expect(playerOInput).toHaveValue(player2)

    expect(turnDisplay).toHaveTextContent(`X's turn (${player1})`)
  })
})

describe('game play works correctly',  () =>{
  

  test('player switches back and forth appropriately', async () => {

    const user = userEvent.setup() 
    render(<App />);

  const gameBoard = await screen.findByTestId('board')
  const boardSquares = await within(gameBoard).findAllByRole('button')

  const turnDisplay =  await screen.findByText(/s turn/i)
  const resetBtn = await screen.findByRole('button', {name:/reset/i})
    expect(turnDisplay.textContent).toContain("X's turn")

    await user.click(boardSquares[0])
    expect(boardSquares[0].textContent).toContain('X')
    expect (turnDisplay.textContent).toContain("O's turn")
    
    await user.click(boardSquares[1])
    expect(boardSquares[1].textContent).toContain('O')
    expect (turnDisplay.textContent).toContain("X's turn")
    
    await user.click(boardSquares[3])
    await user.click(boardSquares[4])
    await user.click(boardSquares[6])

    const winAlert = await screen.findByRole('heading', {name: /wins!/i})
    expect(winAlert).toBeInTheDocument()
    expect(winAlert.textContent).toContain('X wins!')

    await user.click(resetBtn)

    expect(boardSquares[1].textContent).toBeFalsy()

  })
})