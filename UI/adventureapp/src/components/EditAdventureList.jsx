import React from "react";
import EditAdventureCard from "./EditAdventureCard";
import "../assets/styles/adventureList.scss";

const EditAdventureList = ({adventures, deleteAdventure}) => {
  return (
    <div className="card-list">
      {adventures.map((adventure) => (
        <EditAdventureCard
          adventure={adventure}
          deleteAdventure={deleteAdventure}
          key={adventure.id}
        />
      ))}
    </div>
  );
};

export default EditAdventureList;
