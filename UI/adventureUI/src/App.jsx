import {useEffect, useState} from "react";
import "./App.css";
import CardList from "./components/CardList";
import Forms from "./components/Forms";
import Navi from "./components/Navi";
import axios from "axios";

const App = () => {
  const [adventureList, setAdventureList] = useState([]);

  const getAdventureList = async () => {
    const url = "http://localhost:3000/adventures";
    const response = await axios.get(url);
    const adventureList = await response.data;
    setAdventureList(adventureList);
  };

  const addAdventure = async (newAdv) => {
    setAdventureList((prev) => [...prev, newAdv]);
    const url = "http://localhost:3000/adventures";
    const response = await axios.post(url, newAdv);
    console.log(response);
  };
  useEffect(() => {
    getAdventureList();
  }, []);
  return (
    <>
      <Navi />
      <Forms adventureList={adventureList} addAdventure={addAdventure} />
      <CardList adventureList={adventureList} />
    </>
  );
};

export default App;
