import { useState } from 'react'
import React, { useEffect } from 'react';
import './App.css'
import './styles/Common.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Movies from './components/Movies'
// import Comics from './components/Comics'
// import Games from './components/Games'
// import TVShows from './components/TVShows'
// import Apparel from './components/Apparel'
// import Collectibles from './components/Collectibles'
// import Search from './components/Search'
import Footer from './components/Footer'


function App() {
  useEffect(() => {
    // Agregar clase al body cuando el componente se monte
    document.body.classList.add('light-theme');

    // Limpiar la clase cuando el componente se desmonte (opcional)
    return () => {
      document.body.classList.remove('light-theme');
    };
  }, []); // El arreglo vacío asegura que esto solo se ejecute una vez, al montar el componente.



  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <Footer />

    </>
  )
}

export default App
