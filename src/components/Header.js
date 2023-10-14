import React from 'react';
import logo from '../images/logo.jpg';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de El Entrerriano Mates" />
      <h1>El Entrerriano Mates</h1>
      <p>Tu Rincón del Mate</p>
    </header>
  );
}

export default Header;