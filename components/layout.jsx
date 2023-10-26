import React, { useState } from 'react';
import { Items } from "./items";





    

export function Layout() {

  const [busqueda, setBusqueda] = useState('');

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };



  return (
    <nav className="navbar" style={{ backgroundColor: 'lightgray', padding: '10px' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="navbar-brand">
        <span className="navbar-item">Mi Tienda con React</span>
      </div>
      <Items Name="Productos" url="/catalogo"/>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field has-addons">


          </div>
        </div>
      </div>
    </div>
  </nav>
  
  );
}

