import React from "react";

import Square from "./Square";
import { useTicTacToe } from "../../hooks/useTicTacToe";
import GameInformation from "./GameInformation";

import styles from "./Board.module.css";

const Board = () => {
  const { board, handleSquareSelect, reset, currentTurn, winner, isGameOver } =
    useTicTacToe();

  return (
    <div>
      <GameInformation
        isGameOver={isGameOver}
        winner={winner}
        currentTurn={currentTurn}
        reset={reset}
      />
      <div data-testid="board" className={styles.board}>
        {board.map((value, squareIndex) => (
          <Square
            key={squareIndex}
            value={value}
            onSquareSelect={() => {
              !winner && handleSquareSelect(squareIndex);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
