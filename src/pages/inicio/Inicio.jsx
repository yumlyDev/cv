import patron from "../../assets/patron.png";
import fondo from "../../assets/fondo.png";
import yo from "../../assets/yo.png";
import "./inicio.css";

function Inicio() {
  return (
    <div>
      <div className="patron">
        <img src={patron} alt="patron circulos" className="patronimagen" />
      </div>

      <div className="fotonombre">
        <img src={fondo} className="nombre" alt="Alejandro Herrera" />
      </div>

      <div className="bloquefondo">
        <img src={yo} className="fondo" alt="portfolio" />
      </div>
    </div>
  );
}

export default Inicio;
