import patron from "../../../assets/patron.png";
import "../resumen.css";
function Desarrollador() {
  return (
    <div>
      <div className="patron">
        <img src={patron} alt="patron circulos" className="patronimagen"></img>
      </div>

      <div className="title1 content">
        <h2 className="train">Train movements center (2025)</h2>
        <p>https://www.trainmovementscenter.es</p>
        <ul>
          <li>
            rediseñar y estilizar web
            <ul>
              <li>wordpress → constructores (Elementor)</li>
              <li>Administración, gestion Web, BBDD, Backups</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="title1">
        <div className="content">
          <h2 className="delta">Practicas Deltanet (2025)</h2>
          <ul>
            <li> rediseñar y estilizar webs</li>
            <ul>
              <li>wordpres --&gt; constructores (Divi Builder, Elementor) </li>
              trabajos realizados --&gt; <br />
              <br />
            </ul>
          </ul>
          https://www.deltanet.es/kit-consulting
          <br />
          https://www.edificacionescaballero.com <br />
          https://husaworld.com/
          <br />
          https://www.casamarques.es
        </div>{" "}
      </div>
    </div>
  );
}

export default Desarrollador;
