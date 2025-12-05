import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu.jsx";
import Inicio from "./pages/inicio/Inicio.jsx";
import Acerca from "./pages/acerca/Acerca.jsx";
import Contacto from "./pages/contacto/Contacto.jsx";
import Estudios from "./pages/estudios/Estudios.jsx";
import Resumen from "./pages/experiencia/Resumen.jsx";
import Experiencia from "./pages/experiencia/sistemas/ExperienciaCard.jsx";
import Sistemas from "./pages/experiencia/sistemas/Sistemas.jsx";
import Desarrollador from "./pages/experiencia/desarrollo/Desarrollador.jsx";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/sistemas" element={<Sistemas />} />
        <Route path="/desarrollador" element={<Desarrollador />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
