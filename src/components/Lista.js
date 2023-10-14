import React from 'react';
import producto1Image from '../images/calabaza.jpg';
import producto2Image from '../images/alpaca.jpg';
import producto3Image from '../images/vacuno.jpg';
import producto4Image from '../images/madera.jpg';
import producto5Image from '../images/caña.jpg';
import producto6Image from '../images/palo.jpg';
import producto7Image from '../images/despalada.jpg';
import producto8Image from '../images/compuesta.jpg';
import producto9Image from '../images/saborizada.jpg';
import './Lista.css'; 

const productos = [
  { nombre: "Mates de calabaza", precio: 3200, descripcion: "Es uno de los tipos de mates más tradicionales que existen.", imagen:producto1Image,},
  { nombre: "Mates de plata o alpaca", precio: 4000, descripcion: "Se encuentran realizados con calabazas.", imagen:producto2Image, },
  { nombre: "Mates de cuernos vacuno", precio: 5100, descripcion: "Uno de los mates preferidos por los amantes de esta infusión son los confeccionados en cuernos vacunos.",imagen:producto3Image, },
  { nombre: "Mates de madera", precio: 4800, descripcion: "Los mates de maderas son muy vistosos ya que este es un material natural que aporta ese detalle rústico y sus decoraciones pueden ser muy variadas, según el gusto de cada persona.", imagen:producto4Image, },
  { nombre: "Mates de caña", precio: 2800, descripcion: "Estos mates se encuentran realizados con cañas de bambú. Este es un tipo de madera muy resistente ya que se cultiva y crece en ambientes de temperaturas extremas, esta es una ventaja ya que resiste muy bien al agua caliente.", imagen:producto5Image, },
  { nombre: "Yerba Mate con palo", precio: 1800, descripcion: " Si queremos disfrutar de un mate suave, la Yerba Mate tradicional es una buena opción. Posee un promedio de 70% hojas secas y trituradas y un 30% de palo", imagen:producto6Image, },
  { nombre: "Yerba Mate sin palo o despalada", precio: 1700, descripcion: "Para los que gustan de un mate más fuerte, duradero y de sabor intenso, la opción es utilizar la Yerba Mate sin palo. El Código Alimentario Argentino establece que la yerba mate sin palo debe tener no menos de un 90% de hojas desecadas, rotas o pulverizadas y no más de un 10% de palo.", imagen:producto7Image,},
  { nombre: "Yerba Mate compuesta", precio: 1500, descripcion: "Contiene hierbas como el boldo, tilo, manzanilla, poleo (entre otras). A las propiedades antioxidantes y energizantes de la Yerba Mate, se suman las propiedades de las hierbas naturales. Algunas pueden tomarse después de una comida, ya que muchas de estas hierbas son digestivas. Otras producen una sensación reconfortante, relajante y de bienestar. El Código Alimentario Argentino dice que cada paquete debe contener hasta un 40% de hierbas aromáticas , el 60% restante deberá contener yerba mate.", imagen:producto8Image, },
  { nombre: "Yerba Mate saborizada", precio: 1500, descripcion: "Para los que prefieren ir cambiando los sabores y no gustan de los mates amargos e intensos, (pomelo, limón, naranja) hasta los exóticos como frutos del bosque y tropicales.", imagen:producto9Image,},
];


function Lista() {
  return (
    <div className="lista"> {}
      <h2>Productos Disponibles</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;