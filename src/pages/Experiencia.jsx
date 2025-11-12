function Experiencia() {
  return (
    <div>
      <div className="patron">
        <img
          src="/patron.png"
          alt="patron circulos"
          className="patronimagen"
        ></img>
        <div className="experiencia">
          <p>
            Técnico de sistemas con más de 5 años de experiencia en la
            administración de infraestructuras Cloud y OnPremise, especializado
            en herramientas como Jira, Confluence, Elasticsearch, Remedy, VMware
            y Jenkins. Perfil Junior en desarrollo de aplicaciones web sabiendo
            usar tecnologías de frontend, backend y BBDD (React, MySQL,
            Boostrap)
          </p>
          <div className="proyectos">
            <table>
              <tr>
                <td className="train">
                  <h2>Train movements center (2025)</h2>
                  <br></br>
                  https://www.trainmovementscenter.es
                  <ul>
                    <li> rediseñar y estilizar web</li>
                    <ul>
                      <li>wordpres --&gt; constructores (Elementor)</li>
                      <li>Administración, gestion Web, BBDD, Backups</li>
                    </ul>
                  </ul>
                </td>
                <td>
                  <div className="practica">
                    <h2>Practicas Deltanet (2025)</h2>
                    <ul>
                      <li> rediseñar y estilizar webs</li>
                      <ul>
                        <li>
                          wordpres --&gt; constructores (Divi Builder,
                          Elementor){" "}
                        </li>
                        trabajos realizados --&gt; <br /><br />
                      </ul>
                    </ul>
                    https://www.deltanet.es/kit-consulting
                    <br />
                    https://www.edificacionescaballero.com <br />
                    https://husaworld.com/
                    <br />
                    https://www.casamarques.es
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="trabajo1">
                    <h2>Arelance (2021-2022)</h2>
                    <ul>
                      <li> Administración de sistemas Cloud / OnPremise.</li>
                      <li> Gestión de proyectos con Jira y Confluence.</li>
                      <li>
                        {" "}
                        Administración de Elasticsearch y monitorización con
                        Grafana.
                      </li>
                      <li>Análisis de logs y administración de alertas.</li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="trabajo2">
                    <h2> Civir (2019-2021) </h2>
                    <ul>
                      <li> Tech Middleware-ALM-OPS.</li>
                      <li> Gestión de proyectos en Jira y Confluence.</li>
                      <li> Administración de VMware y GitHub.</li>
                      <li> Gestión de artefactos en Nexus.</li>
                    </ul>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiencia;
