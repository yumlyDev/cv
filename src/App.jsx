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
        <Route path="/Acerca" element={<Acerca />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Estudios" element={<Estudios />} />
        <Route path="/Experiencia" element={<Experiencia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
