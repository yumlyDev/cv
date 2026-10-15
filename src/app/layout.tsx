import type { Metadata } from "next";
import { Montserrat, Italiana } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
  display: "swap",
});

const title = "Alejandro Herrera · Administrador de sistemas y desarrollador web";
const description =
  "Administrador de sistemas IT y desarrollador web. Soporte N1-N3, entornos Windows y Linux, Jira y Confluence, y webs con Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cv.yumly.es"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Alejandro Herrera",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-theme="dark" /* cambia a "light" para el azul claro */
      className={`${montserrat.variable} ${italiana.variable}`}
    >
      <body>
        <header className="nav">
          <div className="container nav__inner">
            <a href="#inicio" className="nav__logo">
              A. Herrera
            </a>
            <nav>
              <ul className="nav__links">
                <li>
                  <a
                    className="nav__link nav__link--hide-mobile"
                    href="#experiencia"
                  >
                    Experiencia
                  </a>
                </li>
                <li>
                  <a
                    className="nav__link nav__link--hide-mobile"
                    href="#sobre-mi"
                  >
                    Sobre mí
                  </a>
                </li>
                <li>
                  <a
                    className="nav__link nav__link--hide-mobile"
                    href="#estudios"
                  >
                    Estudios
                  </a>
                </li>
                <li>
                  <a className="btn btn--primary btn--sm" href="#contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} Alejandro Herrera
          </div>
        </footer>
      </body>
    </html>
  );
}
