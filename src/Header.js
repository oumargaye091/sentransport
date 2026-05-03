import './Header.css';

function Header() {
  const date = new Date().toLocaleDateString('fr-FR');

  return (
    <header className="header">
      <h1 className="header-titre">SénTransport</h1>
      <p className="header-soustitre">{date}</p>
    </header>
  );
}

export default Header;