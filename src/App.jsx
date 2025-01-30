import { useState } from 'react'
import './App.css'
import './styles/Common.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
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
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Poner el footer */}
      <Footer />

    </>
  )
}

export default App
