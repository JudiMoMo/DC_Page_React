import React, { Component } from 'react'
import logo from '../assets/DC_Comics_logo.png'
import '../styles/Header.css'

export default class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <a className="container_logo" href="index.html">
                        <img className="logo" src={logo} alt="Logo de DC"/>
                            <p className="shop">SHOP</p>
                    </a>
                    <form className="search">
                        <input type="text" placeholder="Batman #22 El Caballero Oscuro"/>
                            <button>Buscar</button>
                    </form>
                    <div className="logins">
                        <a href=""><i id="icon_cart" className="fa-solid fa-cart-shopping"></i></a>
                        <a href=""><i id="icon_fav" className="fa-solid fa-heart"></i></a>
                        <a href=""><i id="icon_user" className="fa-solid fa-user"></i></a>
                        <a href=""><i id="button_Light_Dark" className="fa-solid fa-moon"></i></a>
                    </div>
                </header>
            </>
        )
    }
}
