import React from "react";
import Card from "../component/Card";
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card robot={robot} key={robot.id} />
      ))}
    </div>
  );
};

export default CardList;
