import React from 'react';
import './Contact.css'; 
import Header from '../components/Header';

function Contact() {
  return (
    <div className="contact">
       <Header />
      <h2>Contacto</h2>
      <ul>
        <li>
          <strong>Teléfono:</strong>  03437 480 002
        </li>
        <li>
          <strong>Correo Electrónico:</strong> info@elentrerrianomates.com
        </li>
        <li>
          <strong>Instagram:</strong> @elentrerriano
        </li>
        <li>
          <strong>Dirección:</strong> Av. Eva Perón 1040, Santa Elena, Entre Ríos 
        </li>
      </ul>
    </div>
  );
}

export default Contact;

