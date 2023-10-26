import React, { useEffect, useState } from "react";
import './App.css'
import { Layout } from "../components/layout";
import { Footer } from "../components/footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CatalogoApi } from "../services/fakestore";
import { Carrito } from "../components/agregar-carrito";
import { CarritoProvider } from "../components/carritoContext";




function App() {
  return (
      <CarritoProvider>
    <>
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route exact path="/catalogo" element={<CatalogoApi/>} />
          <Route exact path="/carrito" element={<Carrito/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
      </CarritoProvider>
  )
}

export default App
