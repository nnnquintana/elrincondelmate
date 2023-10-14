import React from 'react';
import './Footer.css'; 

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <section id="contacto">
        <h3>Contáctanos</h3>
        <p>Si deseas contactarnos, no dudes en hacerlo:</p>
        <ul>
          <ul><strong>Teléfono:</strong> 03437 480 002</ul>
          <ul><strong>Correo Electrónico:</strong> info@elentrerrianomates.com</ul>
          <ul><strong>Instagram:</strong> @elentrerriano</ul>
          <ul><strong>Dirección:</strong> Av. Eva Perón 1040, Santa Elena, Entre Ríos</ul>
        </ul>
      </section>
      <p>&copy; {currentYear} {props.companyName} - {props.tagline}</p>
    </footer>
  );
}

export default Footer;















