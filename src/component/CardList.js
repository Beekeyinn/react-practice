import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
  return (
    <div className="tc">
      <div className="">
        {robots.map((robot) => (
          <Card robot={robot} key={robot.id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
