export default function SearchBar({ onSearch }) {
  return (
    <input
      className="form-control mb-3"
      placeholder="Recherche par nom"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
