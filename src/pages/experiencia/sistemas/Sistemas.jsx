import React from "react";
import patron from "../../../assets/patron.png";
import { experiencias } from "./empresas"; // <-- importar datos
import ExperienciaCard from "./ExperienciaCard"; // <-- importar componente
import "../resumen.css";

function Sistemas() {
  return (
    <div>
      <div className="patron">
        <img src={patron} alt="patron circulos" className="patronimagen" />
      </div>

      {experiencias.map((exp, index) => (
        <ExperienciaCard
          key={index}
          empresa={exp.empresa}
          periodo={exp.periodo}
          responsabilidades={exp.responsabilidades}
        />
      ))}
    </div>
  );
}

export default Sistemas;
