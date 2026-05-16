import { useState } from "react";
import "./App.css";

import Header from "./Header";
import Recherche from "./Recherche";
import LigneBus from "./LigneBus";
import DetailLigne from "./DetailLigne";
import Footer from "./Footer";

function App() {
  const [recherche, setRecherche] = useState("");
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);

  // Example dataset (replace with your real data)
  const lignes = [
    {
      id: 1,
      numero: "A1",
      depart: "Point A",
      arrivee: "Point B",
      arrets: ["Stop 1", "Stop 2"],
    },
    {
      id: 2,
      numero: "B2",
      depart: "Station X",
      arrivee: "Station Y",
      arrets: ["Stop 3", "Stop 4"],
    },
  ];

  // Filter logic
  const lignesFiltrees = lignes.filter((ligne) =>
    ligne.depart.toLowerCase().includes(recherche.toLowerCase()) ||
    ligne.arrivee.toLowerCase().includes(recherche.toLowerCase()) ||
    ligne.numero.toLowerCase().includes(recherche.toLowerCase())
  );

  function handleClickLigne(ligne) {
    if (ligneSelectionnee && ligneSelectionnee.id === ligne.id) {
      setLigneSelectionnee(null);
    } else {
      setLigneSelectionnee(ligne);
    }
  }

  return (
    <div className="App">
      <Header />

      <main className="contenu">
        <Recherche value={recherche} onChange={setRecherche} />

        <p className="resultat-recherche">
          {lignesFiltrees.length} ligne
          {lignesFiltrees.length > 1 ? "s" : ""} trouvée
          {lignesFiltrees.length > 1 ? "s" : ""}
        </p>

        {lignesFiltrees.map((ligne) => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
            isSelected={ligneSelectionnee?.id === ligne.id}
            onClick={() => handleClickLigne(ligne)}
          />
        ))}

        {ligneSelectionnee && (
          <DetailLigne ligne={ligneSelectionnee} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;