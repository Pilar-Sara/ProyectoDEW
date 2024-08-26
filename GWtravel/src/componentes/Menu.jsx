import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import logoGW from '../imagenes/logo 2.png'
import '../componentes/EstilosInicio.css';


function Menu() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header.classList.add("abajo");
      } else {
        header.classList.remove("abajo");
      }
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
    return (
      <header>
        <div id="cabecera">
          <Link to="/">
            <img className="logoMenu" src={logoGW} alt="Logo"/>
            GW TRAVEL
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/PaginaNosotros">NOSOTROS</Link></li>
            <li><Link to="/PaginaDestino">DESTINOS</Link>
              <ul className="submenu">
                <li><Link to="/PaginaCosta">Costa</Link></li>
                <li><Link to="/PaginasNosotros">Sierra</Link></li>
                <li><Link to="/PaginaSelva">Selva</Link></li>
              </ul>
            </li>
            <li><Link to="/PaginaTestimonios">TESTIMONIOS</Link></li>
            <li><Link to="/PaginaBlog">BLOG</Link></li>
            <li><Link to="/PaginaContacto">CONTACTO</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Menu;