import { useState } from "react";
import { supabase } from "../supabaseClient";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const { error } = await supabase
        .from("contactos") // 👈 nombre de tu tabla en Supabase
        .insert([
          {
            nombre: formData.nombre,
            consulta: formData.consulta,
            mensaje: formData.mensaje,
            telefono: formData.telefono,
          },
        ]);

      if (error) throw error;
      setEnviado(true);
      setFormData({ nombre: "", consulta: "", mensaje: "", telefono: "" });
    } catch (err) {
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
