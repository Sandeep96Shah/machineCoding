import React, { useState } from "react";
import "./selectableGrid.css";

const ROWS = 10;
const COLUMNS = 10;

const SelectableGrid = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedGrids, setSelectedGrids] = useState([]);
  const grids = Array.from({ length: ROWS * COLUMNS }, (_, index) => index + 1);

  const handleMouseDown = (grid) => {
    setSelectedGrids([grid]);
    setIsMouseDown(true);
  };

  const handleMouseEnter = (grid) => {
    if (isMouseDown) {
      const startGrid = selectedGrids[0];
      const endGrid = grid;

      const startRow = Math.floor((startGrid - 1) / ROWS);
      const endRow = Math.floor((endGrid - 1) / ROWS);

      const startColumn = (startGrid - 1) % COLUMNS;
      const endColumn = (endGrid - 1) % COLUMNS;

      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);

      const minColumn = Math.min(startColumn, endColumn);
      const maxColumn = Math.max(startColumn, endColumn);

      const selected = [];
      for (let row = minRow; row <= maxRow; row++) {
        for (let column = minColumn; column <= maxColumn; column++) {
          selected.push(row * COLUMNS + column + 1);
        }
      }

      setSelectedGrids(selected);
    }
  };

  const handleOnMouseUp = () => {
    setIsMouseDown(false);
  };
  return (
    <div
      className="selectable-grid-container"
      style={{ "--rows": ROWS, "--columns": COLUMNS }}
      onMouseUp={handleOnMouseUp}
    >
      {grids.map((grid) => (
        <p
          key={grid}
          className={`grid ${selectedGrids.includes(grid) ? "selected" : ""}`}
          onMouseDown={() => handleMouseDown(grid)}
          onMouseEnter={() => handleMouseEnter(grid)}
        >
          {grid}
        </p>
      ))}
    </div>
  );
};

export default SelectableGrid;
