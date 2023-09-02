import React from "react";


// primeste props de la parent TileList
export const Tile = ({dataInput}) => {
  return (
    <div className="tile-container">
        {Object.values(dataInput).map((value, index) => (
        <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};
