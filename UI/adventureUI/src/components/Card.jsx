import React from "react";
import "../assets/styles/card.scss";

const Card = ({adventure}) => {
  return (
    <div className="card">
      <h4>{adventure.adventureName}</h4>
      <div>
        {" "}
        <p>{adventure.startDate}</p>
        <div class="loader"></div>
        <p>{adventure.endDate}</p>
      </div>

      <button> </button>
    </div>
  );
};

export default Card;
