import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Lista from '../components/Lista'; 
import './Products.css';
import Header from '../components/Header';

function Products() {
const [data, setData] = useState(null);
  useEffect(() => {
    // URL de backend
    fetch('')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const location = useLocation();

  return (
    
    <div>
    <Header />

<p>Bienvenido a El Entrerriano Mates, tu fuente confiable para todo lo relacionado con el mate. Somos una empresa apasionada por compartir la tradición y la cultura del mate con el mundo. Aquí encontrarás una amplia selección de mates de alta calidad, yerba mate de primera y accesorios esenciales para disfrutar de esta bebida única.</p>
<section>
  <h2>Catálogo de Productos</h2>
  <div className="product-catalog">
  <Lista/> 
        </div>
</section>

<section>
  <h2>Información sobre el Mate</h2>
  <div className="mate-info">
    <h3>Historia del mate</h3>
    <p>El mate es una bebida tradicional que ya era consumida por las culturas indígenas de América del Sur mucho antes de la llegada de los colonizadores europeos. Se cree que las tribus guaraníes y quechuas fueron algunas de las primeras en preparar y beber mate en la región.</p>
    <p>A lo largo de los siglos, el mate se convirtió en una parte fundamental de la cultura de América del Sur. La costumbre de compartir el mate con amigos y familiares se convirtió en una tradición arraigada.</p> 

    <h3>Cómo preparar y cebar un buen mate</h3>
    <p>1-Elige un mate de calidad.</p>
    <p>2-Limpia el mate antes de usarlo, especialmente si es nuevo, para quitar cualquier residuo o sabor no deseado.</p>
    <p>3-Llena el mate con yerba mate hasta aproximadamente dos tercios del recipiente. Luego, inclina el mate para que la yerba quede en un lado, formando una pendiente.</p>
    <p>4-Inserta la bombilla en el lado de la yerba donde se encuentra la pendiente.</p>
    <p>5-No utilices agua hirviendo, ya que podría quemar la yerba y alterar el sabor.</p>
    <p>6-Vierte un poco de agua caliente en la parte más profunda del mate, empapando la yerba, pero sin llegar a cubrirla completamente. Deja que el mate repose durante unos momentos, permitiendo que la yerba absorba el agua y se hidrate. Esto es importante para que el mate no sea amargo.</p>

  </div>
</section>
<Link to="/crearproducto"> {}
        <button>Crear Producto</button>
      </Link>
  </div>
);
}

export default Products;