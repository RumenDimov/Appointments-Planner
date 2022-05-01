import React from "react";

export const Tile = (props) => {

  const array = Object.values(props.value);
  return (
    <div className="tile-container">
      {array.map((data, index) => {
        if (index === 0) {
          return <p className="tile-tile" key={index}>{data}</p>;
        }
        return <p className="tile" key={index}>{data}</p>;
      })}
    </div>
  );
};
