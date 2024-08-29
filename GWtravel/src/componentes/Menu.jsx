import { NavLink } from 'react-router-dom';
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
          <NavLink to="/">
            <img className="logoMenu" src={logoGW} alt="Logo"/>
            GW TRAVEL
          </NavLink>
        </div>
        <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : ""} end>INICIO</NavLink></li>
          <li><NavLink to="/PaginaNosotros" className={({ isActive }) => isActive ? "activo" : ""}>NOSOTROS</NavLink></li>
          <li>
            <NavLink to="/PaginaDestino" className={({ isActive }) => isActive ? "activo" : ""}>DESTINOS</NavLink>
            <ul className="submenu">
              <li><NavLink to="/PaginaCosta" className={({ isActive }) => isActive ? "activo" : ""}>Costa</NavLink></li>
              <li><NavLink to="/PaginaSierra" className={({ isActive }) => isActive ? "activo" : ""}>Sierra</NavLink></li>
              <li><NavLink to="/PaginaSelva" className={({ isActive }) => isActive ? "activo" : ""}>Selva</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/PaginaTestimonios" className={({ isActive }) => isActive ? "activo" : ""}>TESTIMONIOS</NavLink></li>
          <li><NavLink to="/PaginaBlog" className={({ isActive }) => isActive ? "activo" : ""}>BLOG</NavLink></li>
          <li><NavLink to="/PaginaContacto" className={({ isActive }) => isActive ? "activo" : ""}>CONTACTO</NavLink></li>
        </ul>
        </nav>
      </header>
    );
  }
  
  export default Menu;