import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({objectArr}) => {



  return (
    <div>
      {objectArr.map((value, index) => <Tile value={value} key={index} />)}
    </div>
  );
};
