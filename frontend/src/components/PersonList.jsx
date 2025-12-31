import { deletePerson } from "../api/personService";
import "../../src/App.css";

export default function PersonList({ persons, refresh, onEdit }) {
  const handleDelete = async (id) => {
    if (window.confirm("Confirmer la suppression ?")) {
      await deletePerson(id);
      refresh();
    }
  };

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {persons.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.age}</td>
            <td className="actions">
              <button className="btn-warning" onClick={() => onEdit(p)}>
                Modifier
              </button>
              <button className="btn-danger" onClick={() => handleDelete(p.id)}>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
