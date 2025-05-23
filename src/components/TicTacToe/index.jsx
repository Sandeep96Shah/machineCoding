import { useState, useRef } from "react";
import "./index.css";

const DEFUALT_PLAYER = "O";

const WINNER_CELLS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const determineWinner = (board) => {
  for (let i = 0; i < WINNER_CELLS.length; i++) {
    const [x, y, z] = WINNER_CELLS[i];
    if (
      board[x].player &&
      board[x].player === board[y].player &&
      board[y].player === board[z].player
    ) {
      return true;
    }
  }
  return false;
};

const getDefaultList = () =>
  Array.from({ length: 9 }, () => ({ player: undefined }));

const TicTacToe = () => {
  const [{ player }, setPlayer] = useState({ player: DEFUALT_PLAYER });
  let list = useRef(getDefaultList());

  const isWinner = determineWinner(list.current);
  const isDraw = !isWinner && !list.current.some(({ player }) => !player);

  const handleOnClick = (index) => {
    if (list.current[index].player || isWinner) return;

    list.current[index].player = player;

    if (determineWinner(list.current)) setPlayer({ player });
    else
      setPlayer((prevPlayer) =>
        prevPlayer.player === "O" ? { player: "X" } : { player: "O" }
      );
  };

  const handleReset = () => {
    if (!isWinner && !isDraw) {
      const confirm = window.confirm("Are you sure you want to Reset?");
      if (!confirm) return;
    }

    list.current = getDefaultList();
    setPlayer({ player: DEFUALT_PLAYER });
  };

  const getMatchStatus = () => {
    if (isWinner) return `Player ${player} wins!`;

    if (isDraw) return "Draw!";

    return `Player ${player} turn`;
  };

  return (
    <div className="tic-tac-toe-container">
      <p aria-live="polite">{getMatchStatus()}</p>
      <div className="box-container">
        {list.current.map(({ player }, index) => (
          <p key={index} className="box" onClick={() => handleOnClick(index)}>
            {player}
          </p>
        ))}
      </div>
      <button aria-label="Reset button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
