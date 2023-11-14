import { TicTacToeBoard, BoardSquareValue } from "@utilities/ticTacToe";

import { useCallback, useState } from "react";

import { isGameOver, isWinner } from "../utilities/ticTacToe";
import { useScore } from "../components/Score";

const createNewTicTacToeBoard = () => Array(9).fill(null);

// const fetchWinCheck = async (url: string, data: any) => {
//   const response = await fetch(url, data);
//   const finalData = await response.json();
//   return finalData;
// };

export const useTicTacToe = () => {
  const { addWinO, addWinX } = useScore();
  const [board, _setBoard] = useState<TicTacToeBoard>(createNewTicTacToeBoard);
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState<BoardSquareValue>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [playerNames, setPlayerNames] = useState({});
  
  const currentTurn: BoardSquareValue = isX ? "X" : "O";
  const setBoard = (board: TicTacToeBoard) => {
    _setBoard(board);
  };
  const handleSquareSelect = useCallback(
    async (selectedSquare: number) => {
      if (board[selectedSquare]) {
        return;
      }
      const newBoard = [...board];
      newBoard[selectedSquare] = currentTurn;
      setBoard(newBoard);

      const winner = isWinner(currentTurn, newBoard);
      const winCheck = { gameOver: winner, winner: currentTurn };

      if (winCheck.gameOver) {
        setWinner(winCheck.winner);
        winCheck.winner === "X" ? addWinX() : addWinO();
      }
      setIsX(!isX);
    },
    [board, isX]
  );

  const reset = () => {
    setBoard(createNewTicTacToeBoard());
    setIsX(true);
    setWinner(null);
  };

  return {
    board,
    handleSquareSelect,
    reset,
    currentTurn,
    winner,
    isGameOver: isGameOver(board),
    setPlayerNames,
    playerNames
  };
};
