import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Header from '../components/Header';

import './Home.css';

import fondo from '../images/fondo.jpg'; 
function Home() {
  const handleButtonClick = () => {
    alert('¡Botón de inicio!');
  };

  // Promociones y ofertas
  const promotions = [
    {
      title: 'Variedad de Mates',
      description: 'Descubre nuestra amplia gama de mates de alta calidad.',
    },
    {
      title: 'Envíos a todo el país',
      description: 'Envíos gratis para compras superiores a 50.000.',
    },
  ];

  return (
    <div className="home">
      <Navbar />
      <Header />
      <img src={fondo} alt="Fondo de El Entrerriano Mates" />
      <Button onClick={handleButtonClick}>Comprar Ahora</Button>    

      <section className="promotions">
        <h2>Promociones y Ofertas</h2>
        <ul>
          {promotions.map((promotion, index) => (
            <li key={index}>
              <strong>{promotion.title}:</strong> {promotion.description}
            </li>
          ))}
        </ul>
      </section>

      <Footer companyName="El Entrerriano Mates" />
    </div>
  );
}

export default Home;