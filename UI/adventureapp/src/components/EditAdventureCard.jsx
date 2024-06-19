import React from "react";
import "../assets/styles/editAdventureCard.scss";
import suitcase from "../assets/img/suitcase.jpg";

const EditAdventureCard = ({adventure, deleteAdventure}) => {
  return (
    <div className="edit-card">
      <div className="card-body">
        <img src={suitcase} alt="suitcase" />
        <h4>{adventure.title}</h4>
        <p>{adventure.startDate}</p>
        <p>{adventure.endDate}</p>
        <p>{adventure.description}</p>
        <button
          onClick={() => deleteAdventure(adventure.id)}
          className="Delete">
          Delete
        </button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default EditAdventureCard;
