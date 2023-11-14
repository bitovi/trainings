import type { BoardSquareValue } from "@utilities/ticTacToe";

import styles from "./Square.module.css";
import React from "react";

interface BoardSquareProps {
  onSquareSelect: () => void;
  value: BoardSquareValue;
}

const Square = ({ onSquareSelect, value }: BoardSquareProps) => {
  return (
    <button className={styles.square} onClick={() => onSquareSelect()}>
      {value}
    </button>
  );
};

export default Square;
