import { useEffect, useState } from "react";
import { getAllPersons } from "../api/personService";
// import { searchByName } from "../api/personService";

import PersonList from "../components/PersonList";
import PersonForm from "../components/PersonForm";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [persons, setPersons] = useState([]);
  const [selected, setSelected] = useState(null);

  const loadPersons = async () => {
    const res = await getAllPersons();
    console.log(res.data);
    setPersons(res.data);
  };

  const handleSearch = async (name) => {
    if (!name) return loadPersons();
    const res = await searchByName(name);
    setPersons(res.data);
  };

  useEffect(() => {
    loadPersons();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Gestion des personnes</h2>
      <PersonForm selected={selected} refresh={loadPersons} />
      {/* <SearchBar onSearch={handleSearch} /> */}
      <PersonList
        persons={persons}
        refresh={loadPersons}
        onEdit={setSelected}
      />
    </div>
  );
}
