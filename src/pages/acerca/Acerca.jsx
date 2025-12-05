import patron from "../../assets/patron.png";
function Acerca() {
  return (
    <div>
      {/* Patrón de fondo */}
      <div className="patron">
        <img src={patron} alt="patron circulos" className="patronimagen" />
      </div>

      {/* Sección principal */}
      <div className="acerca-container">
        <div className="title1">
          <p>
            <strong>Quién soy:</strong> <br></br>Técnico de Sistemas N2 y
            Programador Junior, con experiencia en soporte técnico y desarrollo
            web. Destaco por mi actitud proactiva, capacidad analítica y enfoque
            en la resolución eficiente de problemas.
          </p>

          <p>
            <strong>Habilidades técnicas:</strong>
          </p>
          <ul>
            <li>
              Soporte técnico: Windows, Linux, diagnóstico y resolución de
              incidencias de hardware, software y redes.
            </li>
            <li>
              Desarrollo web: PHP, MySQL, HTML, CSS, JavaScript, React, wordpres
            </li>
            <li>Configuración de entornos: XAMPP, Apache, MySQL, PHP.</li>
            <li>
              Atención al usuario: Soporte presencial y remoto, gestión de
              tickets e incidencias.
            </li>
          </ul>

          <p>
            <strong>Logros y experiencia:</strong>
          </p>
          <ul>
            <li>
              Resolución eficaz de incidencias técnicas, garantizando
              continuidad operativa.
            </li>
            <li>
              Desarrollo e implementación de proyectos web funcionales,
              centrados en la usabilidad.
            </li>
            <li>
              Optimización de procesos internos en entornos de soporte y
              administración técnica.
            </li>
          </ul>

          <p>
            <strong>Objetivo profesional:</strong> Busco oportunidades que me
            permitan seguir creciendo profesionalmente y aportar valor
            combinando mi experiencia en soporte técnico con mis habilidades en
            desarrollo de software.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
