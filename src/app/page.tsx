import Image from "next/image";
import CopyEmail from "@/components/CopyEmail";
import StackedScroll from "@/components/StackedScroll";

const experience = [
  {
    period: "Ago. 2025 – actualidad",
    role: "Desarrollador web y sistemas freelance",
    company: "Freelance · Train Movements Center",
    points: [
      "Diseño y desarrollo de su nueva web con Next.js, React y CSS, desplegada en Vercel.",
      "Limpieza de malware y recuperación de la web anterior en WordPress.",
      "Mejoras SEO–SEM, backups semanales y migraciones de entorno.",
    ],
  },
  {
    period: "2021 – 2022",
    role: "Técnico de middleware · Administración Jira y Confluence",
    company: "Arelance · cliente Orange",
    points: [
      "Administración de proyectos Jira: workflows, roles, permisos, JQL y scripting con ScriptRunner (Groovy).",
      "Documentación en Confluence.",
      "Administración de Jenkins: revisión de logs y monitorización de flujos.",
    ],
  },
  {
    period: "2020 – 2021",
    role: "Técnico de soporte N1 y sistemas",
    company: "Civir · cliente Santander Global Tech",
    points: [
      "Soporte a usuarios de nivel 1 y gestión de incidencias con Remedy y ServiceNow.",
      "Administración de Jira y Confluence y de máquinas virtuales VMware.",
      "Microinformática: formateo de equipos e instalación de hardware y software.",
    ],
  },
];

const studies = [
  {
    period: "2023 – 2025",
    title: "Técnico Superior en Desarrollo de Aplicaciones Web",
    place: "MEDAC",
    text: "Ciclo formativo de grado superior.",
  },
  {
    period: "2011 – 2013",
    title: "Técnico en Sistemas Microinformáticos y Redes",
    place: "IES Jovellanos",
    text: "Ciclo formativo de grado medio.",
  },
];

const skills = [
  {
    group: "Desarrollo web",
    items: ["Next.js", "React", "TypeScript", "CSS/SASS", "Vercel", "GitHub"],
  },
  { group: "SEO / marketing", items: ["SEO técnico", "SEM", "Search Console"] },
  { group: "Sistemas", items: ["Linux", "Windows", "VMware", "Docker", "SSH"] },
  {
    group: "Gestión y soporte",
    items: [
      "Jira",
      "Confluence",
      "ScriptRunner",
      "Jenkins",
      "ServiceNow",
      "Remedy",
    ],
  },
];

export default function Home() {
  return (
    <>
      <StackedScroll />

      <section id="inicio" className="hero" data-stack>
        <div className="container hero__inner">
          <div>
            <h1 className="hero__title">Alejandro Herrera</h1>
            <p className="hero__subtitle">
              Desarrollo web y SEO para centros deportivos y negocios que
              quieren más visibilidad y más clientes.
            </p>
                 <p className="hero__subtitle">
             Disponible para proyectos y para incorporarme a un equipo
            </p>
            
            <div className="hero__actions">
              <a href="#experiencia" className="btn btn--primary">
                Ver experiencia
              </a>
              <a href="#contacto" className="btn btn--ghost">
                Contactar
              </a>
              <div className="hero__actions cv-actions">
  <a href="/Cv Desarrollo alejandro.pdf" download className="btn btn--ghost">
    CV desarrollo (PDF)
  </a>
  <a href="/Cv sistemas alejandro.pdf" download className="btn btn--ghost">
    CV sistemas (PDF)
  </a>
</div>
            </div>
          </div>
          <Image
            src="/yo.webp"
            alt="Alejandro Herrera"
            width={340}
            height={340}
            priority
            className="hero__photo"
          />
        </div>
      </section>

      <section id="experiencia" className="section" data-stack>
        <div className="container">
          <h2 className="section__title">Experiencia</h2>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.period} className="entry">
                <p className="entry__period">{e.period}</p>
                <div>
                  <h3 className="entry__title">{e.role}</h3>
                  <p className="entry__org">{e.company}</p>
                  <ul className="entry__list">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="sobre-mi" className="section" data-stack>
        <div className="container">
          <h2 className="section__title">Sobre mí</h2>
          <div className="prose">
            <p>
              Desarrollador web con base sólida en sistemas. Creo, rediseño y
              mantengo sitios web con Next.js, React y CSS, y los combino con
              estrategia SEO–SEM para que ganen visibilidad. Como freelance
              desarrollé y publiqué en Vercel la nueva web de Train Movements
              Center, tras limpiar el malware de su WordPress anterior.
            </p>
            <p>
              Vengo de entornos de producción exigentes: administré proyectos
              Jira y Confluence, Jenkins y VMware para clientes como Orange y
              Santander Global Tech, por eso cuido la seguridad, los backups y
              las migraciones de cada proyecto.
            </p>
          </div>
          <div className="skills">
            {skills.map((g) => (
              <div key={g.group}>
                <p className="skills__label">{g.group}</p>
                <div className="tags">
                  {g.items.map((i) => (
                    <span key={i} className="tag">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="estudios" className="section" data-stack>
        <div className="container">
          <h2 className="section__title">Estudios</h2>
          <ol className="timeline">
            {studies.map((s) => (
              <li key={s.title} className="entry">
                <p className="entry__period">{s.period}</p>
                <div>
                  <h3 className="entry__title">{s.title}</h3>
                  <p className="entry__org">{s.place}</p>
                  <p className="entry__text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contacto" className="section section--contact" data-stack>
        
        <div className="container">
          <h2 className="section__title">Contacto</h2>
          <p className="lead">
            ¿Tienes un proyecto o una oferta? Escríbeme y te respondo lo antes
            posible.
          </p>
          <CopyEmail />
        </div>
      </section>
    </>
  );
}
