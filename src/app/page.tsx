import Image from "next/image";
import CopyEmail from "@/components/CopyEmail";
import StackedScroll from "@/components/StackedScroll";

const experience = [
  {
    period: "Ago. 2025 – actualidad",
    role: "Administrador de sistemas y desarrollador web freelance",
    company: "Freelance · Train Movements Center",
    points: [
      "Securización de entornos en producción, backups semanales y migraciones de entorno.",
      "Limpieza de malware y recuperación de la web anterior en WordPress.",
      "Diseño y desarrollo de su nueva web con Next.js, React y CSS, desplegada en Vercel.",
      "Mejoras SEO–SEM y propuestas proactivas de mejora para los sitios de los clientes.",
    ],
  },
  {
    period: "2021 – 2022",
    role: "Técnico de middleware · Administración Jira y Confluence",
    company: "Arelance · cliente Orange",
    points: [
      "Administración de proyectos Jira: workflows, roles, permisos, JQL y scripting con ScriptRunner (Groovy).",
      "Documentación en Confluence.",
      "Administración de Jenkins (revisión de logs y monitorización de flujos) y de contenedores Docker.",
      "Monitorización de alertas con Grafana en diferentes pizarras.",
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
const projects = [
  {
    label: "Proyecto propio",
    title: "Yumly Consulting",
    url: "https://www.yumly.es",
    text: "Consultoría IT y desarrollo web a medida para empresas y particulares: desarrollo con React y Next.js, soporte técnico, infraestructura y mantenimiento.",
  },
  {
    label: "Cliente",
    title: "Train Movements Center",
    url: "https://www.trainmovementscenter.es",
    text: "Nueva web con Next.js, React y CSS desplegada en Vercel, tras limpiar el malware de su WordPress anterior. Incluye las secciones de Rendimiento Deportivo y Valoración del Movimiento.",
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
    group: "Sistemas",
    items: ["Linux", "Windows", "VMware", "Docker", "SSH"],
  },
  {
    group: "Gestión y monitorización",
    items: [
      "Jira",
      "Confluence",
      "ScriptRunner",
      "Jenkins",
      "Grafana",
      "ServiceNow",
      "Remedy",
    ],
  },
  {
    group: "Desarrollo web",
    items: ["Next.js", "React", "TypeScript", "CSS/SASS", "Vercel", "GitHub"],
  },
  { group: "SEO / marketing", items: ["SEO técnico", "SEM", "Search Console"] },
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
              Administrador de sistemas IT y desarrollador web: del servidor a
              la web publicada.
            </p>
            <p className="hero__availability">
              Soporte N1-N3, entornos Windows y Linux, Atlassian y Next.js.
              Disponible para incorporarme a un equipo o para proyectos.
            </p>
            <div className="hero__actions">
              <a href="#experiencia" className="btn btn--primary">
                Ver experiencia
              </a>
              <a href="#contacto" className="btn btn--ghost">
                Contactar
              </a>
            </div>
            <div className="hero__actions">
              <a
                href="/Cv_sistemas_alejandro.pdf"
                download
                className="btn btn--ghost"
              >
                CV sistemas (PDF)
              </a>
              <a
                href="/Cv_Desarrollo_alejandro.pdf"
                download
                className="btn btn--ghost"
              >
                CV desarrollo (PDF)
              </a>
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
<section id="proyectos" className="section" data-stack>
  <div className="container">
    <h2 className="section__title">Proyectos</h2>
    <ol className="timeline">
      {projects.map((p) => (
        <li key={p.title} className="entry">
          <p className="entry__period">{p.label}</p>
          <div>
            <h3 className="entry__title">{p.title}</h3>
            <a
              className="entry__link"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.url.replace("https://", "")} ↗
            </a>
            <p className="entry__text">{p.text}</p>
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
              Administrador de sistemas IT con experiencia en entornos Windows
              y Linux, Cloud y On-Premise, y soporte técnico de nivel 1 a 3. He
              administrado Jira y Confluence, Jenkins y VMware para clientes
              como Orange y Santander Global Tech.
            </p>
            <p>
              Desde 2025 trabajo como freelance: aseguro entornos en
              producción, gestiono backups y migraciones, y desarrollo webs con
              Next.js, React y CSS. Publiqué en Vercel la nueva web de Train
              Movements Center tras limpiar el malware de su WordPress
              anterior.
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
