import { useState, useEffect } from "react";
import { addPerson, updatePerson } from "../api/personService";

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
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="form-control mb-2"
        name="name"
        placeholder="Nom"
        value={person.name}
        onChange={handleChange}
        required
      />
      <input
        className="form-control mb-2"
        name="age"
        type="number"
        placeholder="Age"
        value={person.age}
        onChange={handleChange}
        required
      />
      <button className="btn btn-primary">
        {selected ? "Modifier" : "Ajouter"}
      </button>
    </form>
  );
}
