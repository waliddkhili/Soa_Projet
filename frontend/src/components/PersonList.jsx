import { deletePerson } from "../api/personService";

export default function PersonList({ persons, refresh, onEdit }) {
  const handleDelete = async (id) => {
    if (window.confirm("Confirmer la suppression ?")) {
      await deletePerson(id);
      refresh();
    }
  };

  return (
    <table className="table table-bordered">
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
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => {
                  console.log(p);
                  onEdit(p);
                }}
              >
                Modifier
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(p.id)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
