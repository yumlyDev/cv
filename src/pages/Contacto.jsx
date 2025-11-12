function Contacto() {
  return (
    <div>
      <form>
        <label>Nombre:</label>
        <input type="text" name="nombre" />
        <br />

        <label>Consulta:</label>
        <input type="text" name="consulta" />
        <br />

        <label>Mensaje:</label>
        <textarea name="mensaje"></textarea>
        <br />

        <label>Teléfono:</label>
        <input type="number" name="telefono" />
        <br />

        <label>Whatsapp: </label>
      <button onClick={() => window.open("https://wa.me/639253274", "_blank")}>
  Escríbeme por WhatsApp
</button>


        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
