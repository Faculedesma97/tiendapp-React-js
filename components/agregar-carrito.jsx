import React from 'react';
import { useCarrito } from "./carritoContext";
import { Card } from "./card";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export function Carrito() {
  const { carrito, quitarDelCarrito, vaciarCarrito } = useCarrito();



  const eliminarDelCarrito = (productoId) => {
    quitarDelCarrito(productoId);
    Swal.fire(
      'Producto eliminado',
      'se elimino el producto del carrito',
      'sucess'
    )
  };

  const finalizar = () =>{
    vaciarCarrito()
  }

  function Finalizar() {
    Swal.fire({
      title: '¿Confirma la compra?',
      text: "esta apunto de confirmar su compra.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar compra'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Compra finalizada',
          'Gracias por su compra!',
          'success'
        )
        finalizar()
      }
    })
  }

  const total = carrito.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h1 className='header'>Carrito de Compras</h1>
      <div className='button-container'>
      <Link to="/catalogo">
        <button className="btn btn-primary .button-container">Volver a la lista</button>
      </Link>

      </div>
      <ul>
        {carrito.map((product) => (
          <Card key={product.id} product={product} esCarrito={true} eliminarDelCarrito={eliminarDelCarrito} />
        ))}
      </ul>

      <h2>Total a pagar= ${total.toFixed(2)}</h2>
<div className='button-container'>
      <button   onClick={Finalizar}>Finalizar Compra</button>

</div>
    </div>
  );
}


