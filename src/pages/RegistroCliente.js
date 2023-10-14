import React, { useState } from 'react';
import './RegistroCliente.css';
import Header from '../components/Header';

function RegistroCliente() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegistro = () => {

    const datosCliente = {
      nombre,
      email,
      contrasena,
    };

    fetch('/api/registrarCliente', {
      method: 'POST',
      body: JSON.stringify(datosCliente),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        
        console.log('Cliente registrado con éxito:', data);
      })
      .catch(error => {
       
        console.error('Error al registrar el cliente:', error);
      });
  };

  return (
    <div>
        <Header />
      <h2>Registro de Cliente</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contrasena}
            onChange={e => setContrasena(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegistro}>
          Registrar
        </button>
      </form>
    </div>
  );
}

export default RegistroCliente;