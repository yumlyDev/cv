import patron from "../../assets/patron.png";

function Estudios() {
  return (
    <div>
      <div className="patron">
        <img src={patron} alt="patron circulos" className="patronimagen"></img>
      </div>
      <div className="title1">
        <h1>Educación</h1>
        <p>Formacion profersional Tecnico superior</p>
        <p>Desarrollo en aplicaciones web(2025)</p>
        <ul>
          Tegnologias<li>HTML, CSS, XML, Boostrap, React, Javascript </li>
        </ul>
        ____________________________________
        <p>Formacion profersional Tecnico medio</p>
        <p>Sistemas microinformaticos sistemas y redes(xxxx)</p>
        <ul>
          Tegnologias<li>Windows, Linux, VMware</li>
        </ul>
        ____________________________________
        <p>idiomas</p>
        <ul>
          <li>Ingles B1</li>
          <li>Espñol(nativo)</li>
        </ul>
        ____________________________________
        <p>otros</p>
        <ul>
          <li>Docker</li>
          <li>jenkis</li>
          <li>Grafana</li>
        </ul>
      </div>
    </div>
  );
}

export default Estudios;
