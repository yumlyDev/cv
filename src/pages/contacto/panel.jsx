import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

function Panel() {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    const obtenerMensajes = async () => {
      const { data, error } = await supabase
        .from("contactos")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error) setMensajes(data);
    };
    obtenerMensajes();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Mensajes recibidos</h2>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Consulta</th>
            <th>Mensaje</th>
            <th>Teléfono</th>
            <th>IP</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {mensajes.map((m) => (
            <tr key={m.id}>
              <td>{m.nombre}</td>
              <td>{m.consulta}</td>
              <td>{m.mensaje}</td>
              <td>{m.telefono}</td>
              <td>{m.ip}</td>
              <td>{m.fecha_formateada}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Panel;
