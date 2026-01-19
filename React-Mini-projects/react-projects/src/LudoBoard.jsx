import React from "react";
import { useState } from "react";

export default function LudoBar() {
  const [moves, setMoves] = useState({
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0,
  });

  // increment a specific color count (immutable update)
  const increase = (color) => {
    setMoves((prev) => ({ ...prev, [color]: prev[color] + 1 }));
  };

  // optional: reset all counts to zero
  const resetAll = () => {
    setMoves({ blue: 0, yellow: 0, green: 0, red: 0 });
  };

  return (
    <div>
      <p>🎲 Game begins!</p>

      <div className="board" style={{ display: "grid", gap: 12 }}>
        <div>
          <p>Blue moves = {moves.blue}</p>
          <button
            type="button"
            aria-label="Increase blue moves"
            onClick={() => increase("blue")}
            style={{ backgroundColor: "blue", color: "white" }}
          >
            +1
          </button>
        </div>

        <div>
          <p>Yellow moves = {moves.yellow}</p>
          <button
            type="button"
            aria-label="Increase yellow moves"
            onClick={() => increase("yellow")}
            style={{ backgroundColor: "goldenrod" }}
          >
            +1
          </button>
        </div>

        <div>
          <p>Green moves = {moves.green}</p>
          <button
            type="button"
            aria-label="Increase green moves"
            onClick={() => increase("green")}
            style={{ backgroundColor: "green", color: "white" }}
          >
            +1
          </button>
        </div>

        <div>
          <p>Red moves = {moves.red}</p>
          <button
            type="button"
            aria-label="Increase red moves"
            onClick={() => increase("red")}
            style={{ backgroundColor: "red", color: "white" }}
          >
            +1
          </button>
        </div>

        <div>
          <button type="button" onClick={resetAll}>
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}
