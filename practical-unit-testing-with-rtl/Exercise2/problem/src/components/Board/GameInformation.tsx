import type { BoardSquareValue } from "@utilities/ticTacToe";

import styles from "./GameInformation.module.css";

import { useState } from "react";
import { useTicTacToe } from "../../hooks/useTicTacToe"

interface GameInformationProps {
  isGameOver: boolean;
  winner: BoardSquareValue;
  currentTurn: BoardSquareValue;
  reset: () => void;
}

const GameInformation = ({
  isGameOver,
  winner,
  currentTurn,
  reset,
}: GameInformationProps) => {
  const showGameOver = isGameOver && !winner;

  const [xName, setXName] = useState("");
  const [oName, setOName] = useState("");
  const { savePlayerNames } = useTicTacToe();

  return (
    <>
      <div className={styles.informationContainer}>
        <label htmlFor="xPlayer">Enter X Player Name</label>
        <input
          type="text"
          id="xPlayer"
          onChange={(e) => setXName(e.target.value)}
        />

        <label htmlFor="oPlayer">Enter O Player Name</label>
        <input type="text" id="oPlayer" onChange={(e)=>setOName(e.target.value)}/>
        <button onClick={() => savePlayerNames({x:xName, o: oName})}>Save Player Names</button>
      </div>
      {showGameOver && <h2>Game Over</h2>}
      {winner && <h2>{winner} wins!</h2>}
      {winner && <h2>{`Congrats, ${winner == "X"? xName : oName}!`}</h2>}
      <div className={styles.informationContainer}>
        <p className={styles.turnInformation}>{currentTurn}'s turn {currentTurn == "X" ?`(${xName})` : `(${oName})`}  </p>
        <button onClick={() => reset()}>Reset Game</button>
      </div>
    </>
  );
};

export default GameInformation;
