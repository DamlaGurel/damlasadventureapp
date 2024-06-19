import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import NewAdventureForm from "./components/NewAdventureForm";
import AdventureList from "./components/AdventureList";
import EditAdventureList from "./components/EditAdventureList";
import axios from "axios";

const App = () => {
  const [adventureList, setAdventureList] = useState([]);

  const getAdventures = async () => {
    let url = "http://localhost:3005/adventureList";

    const response = await fetch(url);
    const adventures = await response.json();
    setAdventureList(adventures);
  };

  const addAdventure = async (newAd) => {
    setAdventureList((prev) => [...prev, newAd]);

    const url = "http://localhost:3005/adventureList";
    const response = await axios.post(url, newAd);
    console.log(response);
  };

  const deleteAdventure = async (id) => {
    setAdventureList((prev) => prev.filter((fromState) => fromState.id !== id));
    const url = "http://localhost:3005/adventureList";
    const response = await axios.patch(url, {isDeleted: true});
    console.log(response);
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/my-adventures"
          element={<AdventureList adventures={adventureList} />}
        />
        <Route
          path="/new-adventure-plan"
          element={
            <NewAdventureForm
              adventures={adventureList}
              addAdventure={addAdventure}
            />
          }
        />
        <Route
          path="/edit-adventure-plan"
          element={
            <EditAdventureList
              adventures={adventureList}
              deleteAdventure={deleteAdventure}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
