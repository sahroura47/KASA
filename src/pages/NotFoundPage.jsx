import { Link } from "react-router-dom";
import Notfound from '../assets/404.svg'
function NotFoundPage() {
  return (
    <div className="notFoundContainer">
      <img src={Notfound} alt='NotFound' className="notFound" />
      <h1 className="NotfoundText">Oups! La page que vous demandez n'existe pas</h1>
      <Link to="/" className="linkToHome">Retourner sur la page d’accueil </Link>
    </div>
  );
}
export default NotFoundPage;
