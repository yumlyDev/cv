import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/acerca">Sobre mí</Link></li>
        <li><Link to="/experiencia">Experiencia</Link></li>
        <li><Link to="/estudios">Estudios</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
