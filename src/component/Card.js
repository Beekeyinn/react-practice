import React from "react";
import "tachyons";
const Card = ({ robot }) => {
  return (
    <div className="bg-light-green dib br3 ma3 grow bw2 shadow-5 tc">
      <h1>{robot.username}</h1>
      <img src={robot.image} alt="robots" />
      <h2>
        {robot.firstName} {robot.lastName}
      </h2>
      <p>{robot.email}</p>
    </div>
  );
};

export default Card;
