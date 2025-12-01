function Acerca() {
  return (
    <div>
      {/* Patrón de fondo */}
      <div className="patron">
        <img src="/patron.png" alt="patron circulos" className="patronimagen" />
      </div>

      

      {/* Sección principal */}
      <div className="acerca-container">
        <div className="descripcion">
          <p><strong>Quién soy:</strong> Técnico en Sistemas N2 y Programador Junior, especializado en soporte técnico y desarrollo web, con actitud proactiva y capacidad analítica.</p>

          <p><strong>Habilidades técnicas:</strong></p>
          <ul>
            <li>Soporte técnico: Windows, Linux, resolución de incidencias de hardware, software y redes.</li>
            <li>Desarrollo web: PHP, MySQL, HTML, CSS, JavaScript, React.</li>
            <li>Configuración de entornos locales: XAMPP, Apache, MySQL, PHP.</li>
            <li>Asistencia a usuarios presencial y remota.</li>
          </ul>

          <p><strong>Logros y experiencia:</strong></p>
          <ul>
            <li>Gestión y resolución eficiente de incidencias técnicas.</li>
            <li>Implementación de proyectos web funcionales y orientados a la usabilidad.</li>
            <li>Optimización de procesos y soporte diario para equipos de trabajo.</li>
          </ul>

          <p><strong>Busco:</strong> Oportunidades que me permitan crecer profesionalmente y aportar valor integrando soporte técnico y desarrollo de software.</p>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
