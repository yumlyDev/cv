import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu.jsx";
import Inicio from "./pages/Inicio.jsx";
import Acerca from "./pages/Acerca.jsx";
import Contacto from "./pages/Contacto.jsx";
import Estudios from "./pages/Estudios.jsx";
import Experiencia from "./pages/Experiencia.jsx";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Menú de navegación */}
      <Menu />

      {/* Rutass */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
