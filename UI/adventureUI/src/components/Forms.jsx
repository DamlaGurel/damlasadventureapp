import React, {useState} from "react";
import "../assets/styles/forms.scss";

const Forms = ({addAdventure, adventureList}) => {
  const [adventureName, setAdventureName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [places, setPlaces] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAdventure({
      id: (Number(adventureList[adventureList.length - 1].id) + 1).toString(),
      adventureName: adventureName,
      startDate: startDate,
      endDate: endDate,
      places: places,
      notes: notes,
    });
    setAdventureName("");
    setStartDate("");
    setEndDate("");
    setPlaces("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Adventure</h3>
      <input
        value={adventureName}
        onChange={(e) => setAdventureName(e.target.value)}
        type="text"
        placeholder="Adventure Name"
      />
      <input
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        type="date"
        placeholder="Start Date"
      />
      <input
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        type="date"
        placeholder="End Date"
      />
      {/* <input
        value={places}
        onChange={(e) => setPlaces(e.target.value)}
        type="text"
        placeholder="Place/s"
      />
      <input
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        type="text"
        placeholder="Note/s"
      /> */}
      <input type="submit" value="Save" />
    </form>
  );
};

export default Forms;
