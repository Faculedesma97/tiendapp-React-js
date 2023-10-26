import React from 'react';
import Swal from 'sweetalert2'

export const Card = ({ product, agregarAlCarrito, esCarrito, eliminarDelCarrito }) => {
  const agregarProductoAlCarrito = () => {
    agregarAlCarrito(product);
    Swal.fire({
      icon: 'success',
      title: 'Se ha agregado correctamente',
      text: 'el producto ya se encuentra en su carrito',
    });
  };

  const handleEliminarDelCarrito = () => {
    eliminarDelCarrito(product.id);
  };

  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4 custom_card" key={product.id}>
      <div className="card custom-card">
        <img
          src={product.image}
          alt={`Imagen de ${product.title}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <h5 className="card-text">{product.price}$</h5>
          {esCarrito ? (
            <button className="btn btn-danger" onClick={handleEliminarDelCarrito}>
              Eliminar del carrito
            </button>
          ) : (
            <button className="btn btn-primary" onClick={agregarProductoAlCarrito}>
              {esCarrito ? "Eliminar del carrito" : "Comprar"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


