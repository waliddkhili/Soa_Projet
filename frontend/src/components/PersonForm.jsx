import { useState, useEffect } from "react";
import { addPerson, updatePerson } from "../api/personService";
import "../../src/App.css";

export default function PersonForm({ selected, refresh }) {
  const [person, setPerson] = useState({ name: "", age: "" });

  useEffect(() => {
    if (selected) setPerson(selected);
  }, [selected]);

  const handleChange = (e) =>
    setPerson({ ...person, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    selected
      ? await updatePerson({ ...person, id: selected.id })
      : await addPerson(person);

    setPerson({ name: "", age: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="person-form">
      <h2 className="ajouterHeader">Ajouter des personnes</h2>
      <input
        className="input"
        name="name"
        placeholder="Nom"
        value={person.name}
        onChange={handleChange}
        required
      />
      <input
        className="input"
        name="age"
        type="number"
        placeholder="Age"
        value={person.age}
        onChange={handleChange}
        required
      />
      <button className="btn-primary">
        {selected ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
}
