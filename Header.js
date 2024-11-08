import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Galeria Fotos</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/category/nature">Natural</Link>
        <Link to="/category/city">Ciudad</Link>
        <Link to="/category/animals">Animales</Link>
      </nav>
    </header>
  );
}

export default Header;
