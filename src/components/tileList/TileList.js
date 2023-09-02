import React from "react";
import { Tile } from "../tile/Tile";


// primeste prop de la parent ContactPage si parent Appointments
export const TileList = ({datasInputs}) => {
  return (
    <div>
      {datasInputs.map((dataInput, index)=>(
        <Tile dataInput={dataInput} key={index} />
      ))} 
    </div>
  );
};
