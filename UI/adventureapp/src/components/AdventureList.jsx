import React from "react";
import AdventureCard from "./AdventureCard";
import "../assets/styles/adventureList.scss";

const AdventureList = ({adventures, deleteAdventure}) => {
  return (
    <div className="card-list">
      {adventures.map((adventure) => (
        <AdventureCard
          adventure={adventure}
          deleteAdventure={deleteAdventure}
          key={adventure.id}
        />
      ))}
    </div>
  );
};

export default AdventureList;
