import React from "react";
import Card from "./Card";
import "../assets/styles/cardList.scss";

const CardList = ({adventureList}) => {
  return (
    <>
      <div className="card-list">
        {adventureList.map((adventure) => (
          <Card key={adventure.id} adventure={adventure} />
        ))}
      </div>
    </>
  );
};

export default CardList;
