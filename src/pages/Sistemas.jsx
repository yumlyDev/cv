function Sistemas() {
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

      <div className="title1">
        <h2 className="arelance">Arelance (2021-2022)</h2>
        <ul>
          <li> Administración de sistemas Cloud / OnPremise.</li>
          <li> Gestión de proyectos con Jira y Confluence.</li>
          <ul>
            <li>
              <p>
                Creacion, configuracion y mantenimiento de esquemas y flujos
              </p>
            </li>
            <li>
              <p>Administracion de usuarios</p>
            </li>
            <li>
              <p>Automatizaciones</p>
            </li>
          </ul>
          <li>Administración de Elasticsearch y monitorización con Grafana.</li>
          <ul>
            <li>Revisión de pizarras y monitoreo de alertas programadas </li>
            <li>Gestión de Índices</li>
          </ul>
          <li>Análisis de logs y administración de alertas.</li>
        </ul>
      </div>

      <div className="title2">
        <h2 className="civir"> Civir (2019-2021) </h2>
        <ul>
          <li> Tech Middleware-ALM-OPS.</li>
          <li>Tratamiento de incidencias mediante Service Now.</li>
          <li> Gestión de proyectos en Jira y Confluence.</li>
          <ul>
            <li>
              <p>
                Creacion, configuracion y mantenimiento de esquemas y flujos
              </p>
            </li>
            <li>
              <p>Permisos de usuarios.</p>
            </li>
          </ul>
          <li> Administración de VMware y GitHub.</li>
          <li> Gestión de artefactos en Nexus.</li>
        </ul>
      </div>
    </div>
  );
}

export default Sistemas;
