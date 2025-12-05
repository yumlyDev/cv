import patron from "../../assets/patron.png";
import "./resumen.css";

function Resumen() {
  return (
    <div>
      <div className="patron">
        <img src={patron} alt="patron circulos" className="patronimagen"></img>
      </div>

      <article className="resumen">
        Técnico de sistemas con más de 5 años de experiencia en la
        administración de infraestructuras Cloud y OnPremise, especializado en
        metodologias ágiles administrando herramientas como Jira, confluence.
        Service Now, Elasticsearch, Remedy, VMware y Jenkins. <br></br>Perfil
        Junior en desarrollo de aplicaciones web con conocimientos en
        tecnologías frontend, backend y BBDD (React, MySQL, Boostrap, wordpres )
      </article>
    </div>
  );
}

export default Resumen;
