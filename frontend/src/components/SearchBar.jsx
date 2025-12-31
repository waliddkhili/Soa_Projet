import React, { useState } from "react";
import { searchByName } from "../api/personService";
import { getAllPersons } from "../api/personService";

import "../../src/App.css";

const SearchBar = ({ refresh }) => {
  const [name, setName] = useState("");

  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");

    try {
      const res = await searchByName(name);
      refresh(res.data);
    } catch (err) {
      setError("Erreur lors de la recherche");
    }
  };
  const loadPersons = async () => {
    const response = await getAllPersons();
    refresh(response.data);
  };
  return (
    <div className="search-container">
      <h2>Recherche des personnes</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Entrer le nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleSearch}>Rechercher</button>
        <button onClick={loadPersons}>Afficher tout les personnes</button>
      </div>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SearchBar;
