import React, { useState } from 'react';

function CrearProducto({ onProductoCreado }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleCrearProducto = () => {
   
    const nuevoProducto = {
      nombre,
      precio,
      descripcion,
    };

    onProductoCreado(nuevoProducto);

    setNombre('');
    setPrecio('');
    setDescripcion('');
  };

  return (
    <div>
      <h2>Crear un nuevo producto</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleCrearProducto}>
          Crear Producto
        </button>
      </form>
    </div>
  );
}

export default CrearProducto;