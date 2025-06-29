import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navlist">
          <NavLink to="/"> Accueil</NavLink>
        </li>
        <li className="navlist">
          <NavLink to="/a-propos"> A propos</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
