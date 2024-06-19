// import axios from "axios";
// import {createContext, useEffect, useState} from "react";

// const ApiContext = createContext();

// export const ApiProvider = ({children}) => {
//   const [adventureList, setAdventureList] = useState([]);
//   const [selectedAdventure, setSelectedAdventure] = useState("");
//   const [title, setTitle] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [description, setDescription] = useState("");

//   const getAdventures = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/adventureList");
//       setAdventureList(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const addAdventure = async (newAd) => {
//     try {
//       if (!selectedAdventure) {
//         // Frontend Ekleme
//         setAdventureList((prev) => [...prev, newAd]);
//       } else {
//         // Adventure Düzenleme

//         // Frontend Düzenleme
//         setAdventureList((prev) =>
//           prev.map((adventure) => {
//             if (adventure.id === selectedAdventure.id) {
//               return {...response.data};
//             } else {
//               return adventure;
//             }
//           })
//         );
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const deleteAdventure = async (id) => {
//     const confirmed = confirm(
//       "Are you sure you want to delete this adventure?"
//     );
//     if (confirmed) {
//       try {
//         const response = await axios.delete(
//           `http://localhost:3000/adventureList/${id}`
//         );
//         if (response.status === 200) {
//           setAdventureList((prevAdventureList) =>
//             prevAdventureList.filter((adventure) => adventure.id !== id)
//           );
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   const editAdventure = (id) => {
//     const editedAdventure = adventureList.find((item) => item.id === id);
//     setSelectedAdventure(editedAdventure);
//     console.log(editedAdventure);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addAdventure({
//       id: (
//         Number(adventureList[adventureList.length - 1]?.id || 0) + 1
//       ).toString(),
//       title,
//       startDate,
//       endDate,
//       description,
//     });

//     setTitle("");
//     setStartDate("");
//     setEndDate("");
//     setDescription("");
//   };

//   useEffect(() => {
//     getAdventures();
//   }, []); // Adding an empty dependency array to avoid infinite loop

//   useEffect(() => {
//     if (selectedAdventure) {
//       setTitle(selectedAdventure.title);
//       setStartDate(selectedAdventure.startDate);
//       setEndDate(selectedAdventure.endDate);
//       setDescription(selectedAdventure.description);
//     }
//   }, [selectedAdventure]);

//   return (
//     <ApiContext.Provider
//       value={{
//         deleteAdventure,
//         editAdventure,
//         selectedAdventure,
//         adventureList,
//         handleSubmit,
//         title,
//         startDate,
//         endDate,
//         description,
//         setTitle,
//         setStartDate,
//         setEndDate,
//         setDescription,
//       }}>
//       {children}
//     </ApiContext.Provider>
//   );
// };

// export default ApiContext;
