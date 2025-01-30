import React, { Component } from 'react'
import '../styles/Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="nav">
            <li><a href="pages/catalog/index.html">Popular</a></li>
            <li><a href="pages/catalog/index.html">Cómic</a></li>
            <li><a href="pages/catalog/index.html">Novela Visual</a></li>
            <li><a href="pages/catalog/index.html">Ofertas</a></li>
            <li><a href="pages/catalog/index.html">Gratis</a></li>
        </ul>
    </nav>
    )
  }
}
