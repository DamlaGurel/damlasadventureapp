import React, {useState} from "react";
import "../assets/styles/newAdventureForm.scss";

const NewAdventureForm = ({addAdventure, adventures}) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAdventure({
      id: (Number(adventures[adventures.length - 1].id) + 1).toString(),
      title: title,
      startDate: startDate,
      endDate: endDate,
      description: description,
    });

    setTitle("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-adventure-form">
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adventure Title"
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Adventure Description"
      />

      <input type="submit" value="Save" />
    </form>
  );
};

export default NewAdventureForm;

//notes,gün özeti,fotoğraflar,müzik,gezilen yerler,ülke,şehir,rezervasyonlar,puanlama yorumlar.
