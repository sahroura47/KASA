import { Link } from "react-router-dom";

const Navbar= () => {
    return (
 <div>
    <ul className="navbar">
        <li><Link to="/"> Accueil</Link></li>
        <li><Link to="/a-propos">A propos</Link></li>
    </ul>
 </div>
    );
}
export default Navbar;