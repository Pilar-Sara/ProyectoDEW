import { Fragment } from "react";
import { useEffect, useState } from "react";
import '../componentes/EstilosDestinos.css'
import Fondo1 from '../imagenes/Logo-1.jpg'
import Fondo2 from '../imagenes/Logo-6.jpg'
import Fondo3 from '../imagenes/Logo-3.jpg'
import Fondo4 from '../imagenes/Logo-5.jpg'
import IMGCosta from '../imagenes/Costa.jpg'
import IMGSierra from '../imagenes/Sierra.jpg'
import IMGSelva from '../imagenes/Selva.jpg'
import { Link } from 'react-router-dom';

function destino() {
    return (
        <>

           

            <div className="slider-box">
                <ul>
                    <li>
                        <img src={Fondo1} alt="" />
                        <div className="texto">
                            <h1>Descubre la magia de Machu Picchu.</h1>
                        </div>
                    </li>
                    {/* ---------------- */}
                    <li>
                        <img src={Fondo2} alt="" />
                        <div className="texto">
                            <h1>Conoce la cultura Peruana.</h1>
                        </div>
                    </li>
                    {/* ---- */}
                    <li>
                        <img src={Fondo3} alt="" />
                        <div className="texto">
                            <h1>Paisajes que te dejarán sin aliento.</h1>
                        </div>
                    </li>
                    {/* ---- */}
                    <li>
                        <img src={Fondo4} alt="" />
                        <div className="texto">
                            <h1>Atrévete a explorar los sabores.</h1>
                        </div>
                    </li>
                </ul>
            </div>

            {/*--CUERPO DE PAGINA--*/}

            <div className="cuerpoP">
                <h1>Destinos Populares</h1>
                <p>
                    Perú es un país diverso que se divide en tres grandes regiones geográficas:
                    la costa, la sierra y la selva. Cada una de estas regiones tiene características
                    únicas en cuanto a paisaje, clima, cultura y economía. <br /><br />
                </p>
                <section id="destinos" className="galeria">
                    {/*--TARJETA UNO--*/}
                    <div className="card">
                        <div className="face front">
                            <img src={IMGCosta} alt="" />
                            <h1>COSTA</h1>
                        </div>
                        <div className="face back">
                            <p>
                                Se extiende a lo largo del litoral peruano,
                                desde el norte hasta el sur del país, bordeando el Océano Pacífico.
                                Teniendo el clima árido y semiárido, con poca lluvia y alta humedad
                                en algunas áreas. En el norte, el clima es más cálido,
                                mientras que en el sur es más templado.
                            </p>
                            <div className="link">
                                <a href="../Paginas/costa.html"><Link to="/PaginaCosta">Ver Rutas</Link></a>
                            </div>
                        </div>
                    </div>

                    {/*--TARJETA DOS--*/}
                    <div className="card">
                        <div className="face front">
                            <img src={IMGSierra} alt="" />
                            <h1>SIERRA</h1>
                        </div>
                        <div className="face back">
                            <p>
                                La región montañosa de los Andes, que atraviesa el país de norte a sur.
                                Varía con la altitud, desde templado en los valles interandinos hasta frío en las altas cumbres.
                                En algunas zonas se presentan lluvias estacionales.
                            </p>
                            <div className="link">
                                <a href="../Paginas/sierra.html"><Link to="/PaginaSierra">Ver Rutas</Link></a>
                            </div>
                        </div>
                    </div>

                    {/*--TARJETA TRES--*/}
                    <div className="card">
                        <div className="face front">
                            <img src={IMGSelva} alt="" />
                            <h1>SELVA</h1>
                        </div>
                        <div className="face back">
                            <p>
                                Ocupa la región oriental del país, cubriendo gran parte de la cuenca del Amazonas.
                                Es cálido y húmedo durante todo el año, con lluvias frecuentes. El clima es tropical y
                                permite una gran biodiversidad.
                            </p>
                            <div className="link">
                                <a href="../Paginas/selva.html"><Link to="/PaginaSelva">Ver Rutas</Link></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/*--PIE DE PAGINA--*/}

        </>
    );
}

export default destino;