"use client";

import { useEffect } from "react";

export default function StackedScroll() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-stack]")
    );
    let ticking = false;

    // Dónde se fija cada sección: arriba si cabe entera;
    // si es más alta que la pantalla, cuando su borde inferior toca el fondo.
    const layout = () => {
      const vh = window.innerHeight;
      sections.forEach((el) => {
        el.style.top = `${Math.min(0, vh - el.offsetHeight)}px`;
      });
    };

    // Cuánto ha tapado la sección siguiente a la actual (0 = nada, 1 = todo).
    // Se guarda en --cover y el CSS lo convierte en oscuridad.
    const dim = () => {
      const vh = window.innerHeight;
      sections.forEach((el, i) => {
        const next = sections[i + 1];
        if (!next) return;
        const span = Math.min(el.offsetHeight, vh);
        const cover = 1 - next.getBoundingClientRect().top / span;
        el.style.setProperty(
          "--cover",
          String(Math.min(1, Math.max(0, cover)))
        );
      });
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(dim);
    };

    const onResize = () => {
      layout();
      dim();
    };

    layout();
    dim();
    document.documentElement.classList.add("stack-ready");

    const ro = new ResizeObserver(onResize);
    sections.forEach((el) => ro.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.documentElement.classList.remove("stack-ready");
    };
  }, []);

  return null;
}
