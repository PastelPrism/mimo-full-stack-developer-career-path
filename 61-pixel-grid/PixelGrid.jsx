import React from "react";
import "./PixelGrid.css";

const PixelGrid = ({ grid, updateColor }) => {
  return (
    <div className="grid">
      {grid.map((cell) => (
        <div
          key={`${cell.x}-${cell.y}`}
          className="gridItem"
          style={{
            backgroundColor: cell.color,
            gridColumnStart: cell.x + 1,
            gridRowStart: cell.y + 1,
          }}
          onClick={() => updateColor(cell.x, cell.y)}
        ></div>
      ))}
    </div>
  );
};

export default PixelGrid;