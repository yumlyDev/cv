"use client";

import { useState } from "react";

const EMAIL = "alejandroherrera@yumly.es";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* si falla, el usuario aún puede seleccionar el texto */
    }
  }

  return (
    <div className="hero__actions" style={{ alignItems: "center" }}>
      <a href={`mailto:${EMAIL}`} className="btn btn--primary">
        {EMAIL}
      </a>
      <button type="button" onClick={copy} className="btn btn--ghost">
        {copied ? "¡Copiado!" : "Copiar correo"}
      </button>
      <a
        href="https://www.linkedin.com/in/alejandro-herrera-%C3%A1lvarez-9561a5212/"
        className="btn btn--ghost"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
}