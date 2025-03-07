import React, { Component } from 'react'
// import the css for the footer
import '../styles/Footer.css'
import logo from '../assets/DC_Comics_logo.png'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer className="dc-footer">
                    <div className="footer-content">
                        <div className="logo-section">
                            <img src={logo} alt="Logo de DC" className="dc-logo"/>
                                <p>Los héroes se levantan, las leyendas perduran.</p>
                        </div>

                        <div className="footer-links">
                            <p>Explorar</p>
                            <ul>
                                <li><a href="#movies">Películas</a></li>
                                <li><a href="#comics">Cómics</a></li>
                                <li><a href="#games">Videojuegos</a></li>
                                <li><a href="#tv-shows">Series de TV</a></li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <p>Tienda</p>
                            <ul>
                                <li><a href="#apparel">Ropa</a></li>
                                <li><a href="#collectibles">Coleccionables</a></li>
                                <li><a href="#comics-merch">Merchandise de Cómics</a></li>
                                <li><a href="#toys">Juguetes y Figuras de Acción</a></li>
                            </ul>
                        </div>

                        <div className="social-links">
                            <p>Síguenos</p>
                            <a href="https://www.facebook.com/dc" target="_blank">Facebook</a>
                            <a href="https://www.twitter.com/dccomics" target="_blank">Twitter</a>
                            <a href="https://www.instagram.com/dccomics" target="_blank">Instagram</a>
                            <a href="https://www.youtube.com/dc" target="_blank">YouTube</a>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2023 DC Entertainment. Todos los derechos reservados.</p>
                        <p><a href="#privacy">Política de Privacidad</a> | <a href="#terms">Términos de Uso</a></p>
                    </div>
                </footer>
            </>
        )
    }
}
