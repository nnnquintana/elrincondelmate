import React from 'react';
import './About.css';
import Header from '../components/Header';

function About() {
  return (
    <div className="about">
      <Header />
     <section>
     <h2>Nuestra Historia</h2>
        <p>
          El Entrerriano Mates es una empresa argentina con sede en la ciudad de Santa Elena, dedicada apasionadamente a la producción y venta de mates de la más alta calidad. Desde nuestros humildes comienzos, hemos estado comprometidos con la tradición y la artesanía de la cultura del mate en Argentina.
        </p>
        <p>
          Nos enorgullece ofrecer una amplia variedad de mates, bombillas y accesorios, todos diseñados y fabricados con atención al detalle y amor por la tradición.
        </p>
        <p>
          Nuestra pasión por el mate se refleja en cada producto que creamos. Nos esforzamos por brindar a nuestros clientes mates de alta calidad que realzan la experiencia de tomar mate, manteniendo al mismo tiempo un compromiso inquebrantable con la autenticidad y la sostenibilidad.
        </p>
      </section>
   
    </div>
  );
}

export default About;