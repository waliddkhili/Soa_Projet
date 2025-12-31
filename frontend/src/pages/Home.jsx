import { useEffect, useState } from "react";
import { getAllPersons } from "../api/personService";
import { Routes, Route } from "react-router-dom";

import PersonList from "../components/PersonList";
import PersonForm from "../components/PersonForm";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [persons, setPersons] = useState([]);
  const [selected, setSelected] = useState(null);
  const loadPersons = async () => {
    const response = await getAllPersons();
    setPersons(response.data);
  };
  const handleSearch = async () => {
    // setError("");
    // try {
    //   const response = await searchByName(name);
    //   setPersons(response.data);
    // } catch (err) {
    //   setError("Erreur lors de la recherche");
    // }
  };

  // useEffect(() => {
  //   loadPersons();
  // }, []);

  return (
    <div className="container mt-4">
      <h2>Gestion des personnes</h2>
      <Routes>
        <Route
          path="/personList"
          element={<PersonForm selected={selected} refresh={loadPersons} />}
        />
        <Route path="/search" element={<SearchBar refresh={setPersons} />} />
      </Routes>

      {persons.length !== 0 && (
        <PersonList
          persons={persons}
          refresh={loadPersons}
          onEdit={setSelected}
        />
      )}
    </div>
  );
}
