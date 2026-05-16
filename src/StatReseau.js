function StatReseau({ lignes }) {

  // Nombre total de lignes
  const totalLignes = lignes.length;

  // Somme de tous les arrêts avec reduce()
  const totalArrets = lignes.reduce((sum, ligne) => sum + ligne.arrets, 0);

  // Ligne ayant le plus d'arrêts avec reduce()
  const ligneMax = lignes.reduce(
    (max, ligne) => (ligne.arrets > max.arrets ? ligne : max),
    lignes[0]
  );

  return (
    <div className="stat-reseau">
      <h2 className="stat-titre">Statistiques du Réseau</h2>
      <div className="stat-cards">
        <div className="stat-card">
          <span className="stat-valeur">{totalLignes}</span>
          <span className="stat-label">Lignes au total</span>
        </div>
        <div className="stat-card">
          <span className="stat-valeur">{totalArrets}</span>
          <span className="stat-label">Arrêts au total</span>
        </div>
        <div className="stat-card">
          <span className="stat-valeur">Ligne {ligneMax.numero}</span>
          <span className="stat-label">Plus d'arrêts ({ligneMax.arrets})</span>
        </div>
      </div>
    </div>
  );
}
export default StatReseau; 