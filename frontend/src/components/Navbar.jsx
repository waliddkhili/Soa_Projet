import { NavLink } from "react-router-dom";
import "../../src/App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3>SOA App</h3>
      <ul>
        <li>
          <NavLink to="/personList" end>
            Ajouter
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">Rechercher</NavLink>
        </li>
      </ul>
    </nav>
  );
}
