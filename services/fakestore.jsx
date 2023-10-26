import React, { useState, useEffect } from 'react';
import { Card } from "../components/card";
import { obtenerProductos } from "./api";
import { useCarrito } from "../components/carritoContext"; 
import { Link } from 'react-router-dom';

export const CatalogoApi = () => {
  const { carrito, agregarAlCarrito } = useCarrito();

  const [products, setProducts] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')

  useEffect(() => {
    obtenerProductos()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log(carrito);
  }, [carrito]);

  const handleCategoriaChange = (e) => {
    setCategoriaSeleccionada(e.target.value);
  };

  const productosFiltrados = categoriaSeleccionada
  ? products.filter((product) => product.category === categoriaSeleccionada)
  : products;
  return (
    <div >
      <h1 className='header'>Lista de Productos</h1>
      <div className='busqueda-prod'>
        
      <Link to="/carrito">
        <button className="btn btn-primary">Ir al Carrito</button>
      </Link>
      <select onChange={handleCategoriaChange} value={categoriaSeleccionada}>
                <option value="">Categoria</option>
                <option value="men's clothing">Ropa de Hombre</option>
                <option value="jewelery">Joyeria</option>
                <option value="electronics">Electrodomesticos</option>
                <option value="women's clothing">Ropa de Mujer</option>
              </select>
      </div>
      <div className="row">
      {productosFiltrados.map((product) => (
          <Card key={product.id} product={product} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
    </div>
  );
};


