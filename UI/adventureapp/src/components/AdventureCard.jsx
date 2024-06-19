import React from "react";
import "../assets/styles/adventureCard.scss";
import suitcase from "../assets/img/suitcase.jpg";

const AdventureCard = ({adventure}) => {
  return (
    <div className="card">
      <div className="card-body">
        <img src={suitcase} />
        <h4>{adventure.title}</h4>
        <p>{adventure.startDate}</p>
        <p>{adventure.endDate}</p>
        <p>{adventure.description}</p>
      </div>
    </div>
  );
};

export default AdventureCard;
