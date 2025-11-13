import { useState } from "react";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const obtenerFechaFormateada = () => {
    const ahora = new Date();
    const opciones = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return ahora.toLocaleString("es-ES", opciones);
  };

  const obtenerIP = async () => {
    try {
      const respuesta = await fetch("https://api.ipify.org?format=json");
      const datos = await respuesta.json();
      return datos.ip;
    } catch {
      return "Desconocida";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const fecha = obtenerFechaFormateada();
      const ip = await obtenerIP();

      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ip, fecha_formateada: fecha }),
      });

      const data = await response.json();

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

        <label>Whatsapp: </label>
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
