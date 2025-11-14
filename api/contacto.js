import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Inicializa Resend y Supabase
const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { nombre, consulta, mensaje, telefono, ip, fecha_formateada } = req.body;

    // Guarda los datos en Supabase
    const { error } = await supabase
      .from('contactos')
      .insert([{ nombre, consulta, mensaje, telefono, ip, fecha_formateada }]);

    if (error) throw error;

    // Envía correo por Resend
    try {
      await resend.emails.send({
        from: 'Formulario Web <info@yumly.es>',
        to: 'info@yumly.es',
        subject: 'Nuevo mensaje desde tu web perro',
        html: `
          <h2>Nuevo mensaje recibido</h2>
          <p><b>Nombre:</b> ${nombre}</p>
          <p><b>Consulta:</b> ${consulta}</p>
          <p><b>Mensaje:</b> ${mensaje}</p>
          <p><b>Teléfono:</b> ${telefono}</p>
          <p><b>IP:</b> ${ip}</p>
          <p><b>Fecha:</b> ${fecha_formateada}</p>
        `,
      });
    } catch (resendError) {
      console.error('Error enviando correo:', resendError);
      // Devuelve JSON aunque falle Resend
      return res.status(500).json({
        message: 'Error guardando datos pero fallo al enviar correo',
        error: String(resendError),
      });
    }

    // Todo OK
    return res.status(200).json({ message: 'Datos guardados y correo enviado' });

  } catch (err) {
    console.error('Error en el servidor:', err);
    return res.status(500).json({
      message: 'Error en el servidor',
      error: err?.message || String(err),
    });
  }
}
