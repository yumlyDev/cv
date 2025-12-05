function ExperienciaCard({ empresa, periodo, responsabilidades }) {
  return (
    <div className="title1">
      <h2>
        {empresa} <span>({periodo})</span>
      </h2>

      <div className="responsabilidades">
        {responsabilidades.map((item, i) =>
          typeof item === "string" ? (
            <p key={i} className="responsabilidad">
              {item}
            </p>
          ) : (
            item.subitems?.map((sub, j) => (
              <p key={`${i}-${j}`} className="subitem">
                {sub}
              </p>
            ))
          )
        )}
      </div>
    </div>
  );
}

export default ExperienciaCard;
