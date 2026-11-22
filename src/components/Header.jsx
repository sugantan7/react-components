function Header({ title }) {
  return (
    <header className="header">
      <h2>{title}</h2>
      <nav>
        <a href="#home">Home</a>
        <a href="#components">Components</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;