import React from "react";
import { Tile } from "../tile/Tile";


// child for ContactPage and Appointments
export const TileList = ({datasInputs}) => {
  return (
    <div>
      {datasInputs.map((dataInput, index)=>(
        <Tile dataInput={dataInput} key={index} />
      ))} 
    </div>
  );
};
