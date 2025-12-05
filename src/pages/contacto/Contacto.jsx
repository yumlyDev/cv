import { useState } from "react";
import patron from "../../assets/patron.png";
function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    consulta: "",
    mensaje: "",
    telefono: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const obtenerFechaFormateada = () => {
    const ahora = new Date();
    return ahora.toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const obtenerIP = async () => {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      return data.ip;
    } catch {
      return "Desconocida";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const fecha_formateada = obtenerFechaFormateada();
      const ip = await obtenerIP();

      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ip, fecha_formateada }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("El servidor no devolvió JSON válido");
      }

      if (!response.ok) throw new Error(data.message || "Error desconocido");

      setEnviado(true);
      setFormData({ nombre: "", consulta: "", mensaje: "", telefono: "" });
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="patron">
        <img src={patron} alt="patron circulos" className="patronimagen"></img>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <br />

        <label>Consulta:</label>
        <input
          type="text"
          name="consulta"
          value={formData.consulta}
          onChange={handleChange}
        />
        <br />

        <label>Mensaje:</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
        <br />

        <label>Teléfono:</label>
        <input
          type="number"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
        <br />

        <label>Whatsapp:</label>
        <button
          type="button"
          onClick={() => window.open("https://wa.me/639253274", "_blank")}
        >
          Escríbeme por WhatsApp
        </button>
        <br />

        <button type="submit">Enviar</button>
      </form>

      {enviado && <p>✅ Mensaje enviado correctamente.</p>}
      {error && <p style={{ color: "red" }}>❌ Error: {error}</p>}
    </div>
  );
}

export default Contacto;
