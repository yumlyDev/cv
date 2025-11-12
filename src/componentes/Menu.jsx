import { Link } from "react-router-dom";
import "./Menu.css"; // si quieres estilos separados

function Menu() {
  return (
    <nav className="menu">
      <ul>
    <li><Link to="/">Inicio</Link></li>
<li><Link to="/Acerca">Sobre mí</Link></li>
<li><Link to="/Experiencia">Experiencia</Link></li>
<li><Link to="/Estudios">Estudios</Link></li>
<li><Link to="/Contacto">Contacto</Link></li>


      </ul>
    </nav>
  );
}

export default Menu;
