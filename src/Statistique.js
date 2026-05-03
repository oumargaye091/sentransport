function Statistique({ valeur = 0, label = '' }) {
  return (
    <div className="stat">
      <h2>{valeur}</h2>
      <p>{label}</p>
    </div>
  );
}

export default Statistique;