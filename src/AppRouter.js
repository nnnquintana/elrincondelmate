
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import RegistroCliente from './pages/RegistroCliente';
import CrearProducto from './pages/CrearProducto';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/products" component={Products} />
        <Route path="/registrocliente" component={RegistroCliente} />
        <Route path="/crearproducto" component={CrearProducto} />
      </Switch>
    </Router>
  );
}

export default AppRouter;







