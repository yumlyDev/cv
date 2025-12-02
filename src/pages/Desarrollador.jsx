function Desarrollador() {
  return (
    <div>
      <div className="patron">
        <div>Portfolio</div>
        <img
          src="/patron.png"
          alt="patron circulos"
          className="patronimagen"
        ></img>
      </div>
      <div className="experiencia">
        <p>
          Técnico de sistemas con más de 5 años de experiencia en la
          administración de infraestructuras Cloud y OnPremise, especializado en
          herramientas como Jira, Confluence, Elasticsearch, Remedy, VMware y
          Jenkins. Perfil Junior en desarrollo de aplicaciones web sabiendo usar
          tecnologías de frontend, backend y BBDD (React, MySQL, Boostrap)
        </p>
        <div className="proyectos">
          <div className="title1">
            <h2 className="train">Train movements center (2025)</h2>
            https://www.trainmovementscenter.es
            <ul>
              <li> rediseñar y estilizar web</li>
              <ul>
                <li>wordpres --&gt; constructores (Elementor)</li>
                <li>Administración, gestion Web, BBDD, Backups</li>
              </ul>
            </ul>
          </div>

          <div className="title2">
            <h2 className="delta">Practicas Deltanet (2025)</h2>
            <ul>
              <li> rediseñar y estilizar webs</li>
              <ul>
                <li>
                  wordpres --&gt; constructores (Divi Builder, Elementor){" "}
                </li>
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
          </div>
        </div>

        <div className="title3">
          <h2 className="arelance">Arelance (2021-2022)</h2>
          <ul>
            <li> Administración de sistemas Cloud / OnPremise.</li>
            <li> Gestión de proyectos con Jira y Confluence.</li>
            <li>
              {" "}
              Administración de Elasticsearch y monitorización con Grafana.
            </li>
            <li>Análisis de logs y administración de alertas.</li>
          </ul>
        </div>

        <div className="title4">
          <h2 className="civir"> Civir (2019-2021) </h2>
          <ul>
            <li> Tech Middleware-ALM-OPS.</li>
            <li> Gestión de proyectos en Jira y Confluence.</li>
            <li> Administración de VMware y GitHub.</li>
            <li> Gestión de artefactos en Nexus.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Desarrollador;
