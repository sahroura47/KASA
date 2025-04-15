import { Link } from "react-router-dom";


const Navbar= () => {
    return (
 <nav>
    <ul className="navbar">
        <li className="navlist"><Link to="/"> Accueil</Link></li>
        <li className="navlist"><Link to="/a-propos">A propos</Link></li>
    </ul>
 </nav>
    );
}
export default Navbar;