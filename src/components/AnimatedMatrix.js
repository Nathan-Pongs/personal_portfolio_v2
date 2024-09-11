import React, { useEffect, useState } from "react";

const AnimatedMatrix = () => {
  const [matrix, setMatrix] = useState([]);
  const rows = 20; // Number of rows
  const cols = 20; // Number of columns

  useEffect(() => {
    // Create a matrix of boxes (rows x cols grid)
    const matrixArray = Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(false));

    setMatrix(matrixArray);

    // Animate boxes periodically
    const interval = setInterval(() => {
      setMatrix((prevMatrix) =>
        prevMatrix.map((row) =>
          row.map(() => Math.random() > 0.5) // Randomly show or hide boxes
        )
      );
    }, 1000); // Adjust this value to change animation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed w-full flex justify-center items-center bg-dark-blue-900 overflow-hidden">
      <div
        className="grid gap-[1px]"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {matrix.map((row, rowIndex) =>
          row.map((active, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`transition-all duration-500 ${
                active ? "bg-blue-500" : "bg-blue-900"
              }`}
              style={{
                width: `min(${400 / cols}vw, ${200 / rows}vh)`, // Adjust width dynamically based on screen size
                height: `min(${400 / cols}vw, ${200 / rows}vh)`, // Adjust height dynamically based on screen size
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export default AnimatedMatrix;
